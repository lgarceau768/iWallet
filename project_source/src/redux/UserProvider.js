import React from "react";
import { AsyncStorage } from 'react-native'
import UserContext from "./UserContext";
import uuid from 'react-native-uuid';

export class UserProvider extends React.Component {
    cardLogoImages = {
        'Visa': 'https://raw.githubusercontent.com/lgarceau768/iWallet/cardLogic/project_source/assets/visa_logo.svg',
        'Amex': 'https://raw.githubusercontent.com/lgarceau768/iWallet/cardLogic/project_source/assets/amex_logo.svg',
        'MasterCard': 'https://raw.githubusercontent.com/lgarceau768/iWallet/cardLogic/project_source/assets/mastercard_logo.svg',
        'Discover': 'https://raw.githubusercontent.com/lgarceau768/iWallet/cardLogic/project_source/assets/discover_logo.svg',
    }
    state = {
        user: {
            pin: '',
            cards: []
        }
    }

    removeCard(cardID) {
        let spliceIndex = -1;
        for(let i = 0; i < this.state.user.cards.length; i++) {
            const card = this.state.user.cards[i]
            if(card.id === cardID) {
                spliceIndex = i
            }
        }
        const cards = Object.assign({}, this.state.user.cards)
        if(spliceIndex === -1) {
            return {
                error: {
                    type: 'Not Found',
                    message: 'The specified card was not found'
                }
            }
        }
        cards.splice(spliceIndex, 1)
        return {cards}
    } 

    figureOutCardBrand(cardNum) {
        let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        let mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
        let amexpRegEx = /^(?:3[47][0-9]{13})$/;
        let discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
        let isValid = false;
        let cardType = ''
        if (visaRegEx.test(cardNum)) {
            isValid = true;
            cardType = 'Visa'
        } else if(mastercardRegEx.test(cardNum)) {
            isValid = true;
            cardType = 'MasterCard'
        } else if(amexpRegEx.test(cardNum)) {
            isValid = true;
            cardType = 'Amex'
        } else if(discovRegEx.test(cardNum)) {
            isValid = true;
            cardType = 'Discover'
        }      
        return {isValid, cardType}
    }

    validateCard(cardObj) { 
        // need to look for all fields
        let requiredFields = ['name', 'number', 'cvv', 'exp', 'pay', 'tap','zip', 'chip', 'locked', 'fullname']
        for (const field in requiredFields) {
            if (!Object.hasOwnProperty.call(cardObj, field)) {
                return {
                    error: {
                        type: 'Validation Error',
                        message: 'Card Missing ' + field
                    }
                }
            }
        }
        
        // check for a fullname
        let nameValid = /^[a-zA-Z]+$/;
        if(!nameValid.test(cardObj['fullname'])) {
            return {
                error: {
                    type: 'Validation Error',
                    message: 'Invalid Name on Card'
                }
            }
        }

        // only check pay related fields if pay card
        if(cardObj['pay']) {
            // has all fields
            if(cardObj['number'].length < 15 || cardObj['number'].length > 16) {
                return {
                    error: {
                        type: 'Validation Error',
                        message: 'Invalid Card Number'
                    }
                }
            }

            // check number for validity
            let validCard = this.figureOutCardBrand(cardObj['number'])
            if(!validCard['isValid']) {
                return {
                    error: {
                        type: 'Validation Error',
                        message: 'Invalid Card Number'
                    }
                }
            }

            // validate cvv
            let cvvValid = /^\d{3}$/
            if(!cvvValid.test(cardObj['cvv'])) {
                return {
                    error: {
                        type: 'Validation Error',
                        message: 'Invalid CVV Number'
                    }
                }
            }

            // validate zip
            let zipValid = /^\d{5}$/
            if(!zipValid.test(cardObj['zip'])) {
                return {
                    error: {
                        type: 'Validation Error',
                        message: 'Invalid Zip Code'
                    }
                }
            }

            // validate the exp
            let expireValid = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
            if(!expireValid.test(cardObj['exp'])) {
                return {
                    error: {
                        type: 'Validation Error',
                        message: 'Invalid Expiration Date'
                    }
                }
            }

            // set card issuer and logo image
            cardObj.issuer = validCard['cardType']
            cardObj.logoImage = this.cardLogoImages[cardObj.issuer]
        }   
        
        cardObj.id = uuid.v4()
        
        return cardObj
    } 

    componentDidMount() {
        AsyncStorage.getItem('pin')
            .then((pin) => this.setState({ user: {
                ...this.state.user,
                pin
            }}))
            .catch(console.error)   
    }

    render() {
        return (
            <UserContext.Provider 
                value={{
                    user: this.state.user,
                    setPin: pin => {
                        const currentUser = Object.assign({}, this.state.user)
                        currentUser.pin = pin
                        this.setState({
                            user: currentUser
                        })
                    },
                    addCard: (cardObj, onErr, onDone) => {
                        // need to define what fields a card has
                        let result = this.validateCard(cardObj);
                        if(result.err) {
                            return onErr(result.err)
                        } else {
                            const currentUser = Object.assign({}, this.state.user)
                            currentUser.cards.push(result)
                            this.setState({user: currentUser})
                            return onDone()
                        }
                    },
                    removeCard: (cardID, onErr, onDone) => {
                        let result = this.removeCard(cardID);
                        if(result.err) {
                            return onErr(result.err)
                        } else {
                            const currentUser = Object.assign({}, this.state.user)
                            currentUser.cards = result.cards
                            this.setState({user: currentUser})
                            return onDone()
                        }
                    },
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        )
    }
}