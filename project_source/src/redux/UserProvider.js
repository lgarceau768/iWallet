import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserContext from "./UserContext";
import uuid from 'react-native-uuid';

export class UserProvider extends React.Component {
    cardLogoImages = {
        'visa': 'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/visa_logo.svg',
        'american-express': 'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/amex_logo.svg',
        'master-card': 'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/mastercard.svg',
        'discover': 'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/discover_logo.svg',
    }
    state = {
        user: {
            pin: '',
            cards: []
        }
    }

    componentDidUpdate = (newData) => {
        this.storeData(newData)
    }

    async storeData() {
        try {
            await AsyncStorage.setItem('data', JSON.stringify(this.state.user, null, 2))
        } catch (error) {
            console.log('Store Data')
            console.log(error)
        }
    }

    async loadData() {
        try {
            let dataLoaded = await AsyncStorage.getItem('data')
            if(dataLoaded !== undefined){
                this.setState({ user: JSON.parse(dataLoaded)})
            }
        } catch (error) {
            console.log('Load Data')
            console.log(error)
        }
    }

    removeCard(index) {
        if(index === -1) {
            return {
                error: {
                    type: 'Not Found',
                    message: 'The specified card was not found'
                }
            }
        }
        const cards = Object.assign([], this.state.user.cards)
        cards.splice(index, 1)
        return {cards}
    } 

    toggleLock(index) {
        if(index === -1) {
            return {
                error: {
                    type: 'Not found',
                    message: 'The specified card was not found'
                }
            }
        }
        const cards = Object.assign([], this.state.user.cards)
        try {
            cards[index].locked = !cards[index].locked
        } catch (e) {}
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
        let requiredFields = ['name', 'number', 'cvc', 'expiry', 'pay', 'tap','postalCode', 'chip', 'locked']
        for (const field in requiredFields) {
            if (!Object.hasOwnProperty.call(cardObj, requiredFields[field])) {
                return {
                    error: {
                        type: 'Validation Error',
                        message: 'Card Missing ' + requiredFields[field]
                    }
                }
            }
        }

        // only check pay related fields if pay card
        if(cardObj['pay']) {
            // set card issuer and logo image
            cardObj.issuer = cardObj['type']
            cardObj.logoImage = this.cardLogoImages[cardObj.issuer]
        }   
        
        cardObj.id = uuid.v4()
        
        
        const generateColor = () => {
            const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
            return `#${randomColor}`;
        };
        function getRandomInt(max) {
            return Math.floor(Math.random() * max) + 2;
        }

        cardObj.bgColors = []
        for(let i = 0; i < getRandomInt(2); i++){
            cardObj.bgColors.push(generateColor())
        }

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
                            const currentUser = Object.assign([], this.state.user.cards)
                            currentUser.push(result)
                            this.setState({user: {
                                pin: this.state.user.pin,
                                cards: currentUser
                            }})
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
                            console.log(currentUser)
                            this.setState({user: currentUser})
                            this.storeData()
                            return onDone()
                        }
                    },
                    toggleLock: (cardIndex, onErr, onDone) => {
                        let result = this.toggleLock(cardIndex);
                        if(result.err) {
                            return onErr(result.err)
                        } else {
                            const currentUser = Object.assign({}, this.state.user)
                            currentUser.cards = result.cards
                            console.log(currentUser)
                            this.setState({user: currentUser})
                            this.storeData()
                            return onDone()
                        }
                    }
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
