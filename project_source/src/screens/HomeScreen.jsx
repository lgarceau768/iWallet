import React, { useState, useContext, useRef, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Carousel from 'react-native-snap-carousel';

import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'
import IconButton from '../components/IconButton'
import UserContext from '../redux/UserContext'
import CardObject from '../components/CardObject'
import IDialogBox from '../components/DialogBox'
import { useTheme } from '@pavelgric/react-native-theme-provider'
import RegularText from '../components/RegularText'

const HomeScreen = (props) => {
    const navigation = useNavigation();
    let carousel = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(undefined)
    const UserData = useContext(UserContext)
    const themeVar = useTheme()


    /** Functions for navigation */
    const openSettings = () => {
        alert('Setting Screen')
        //navigation.navigate('Settings')
    }
    const openAddCards = () => {
        // alert('Add Card Screen')
        navigation.navigate('CardType')
    }
    const openPay = () => {
        alert('Pay with '+carousel.currentIndex)
        
    }
    const deleteCard = () => {
        UserData.removeCard(carousel.currentIndex, console.error, () => {})
    }

    const openDelete = () => {
        IDialogBox({
            title: "Caution", 
            text: "Are you sure you want to delete this card?",
            onYes: deleteCard,
            onCancel: () => {}
        })
    }

   const styles = StyleSheet.create({
        safeContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"
        },
        iconButtonContainer: {
            marginHorizontal: 5,
            padding: 5,
            width: 70,
            height: 170,
            justifyContent: 'center',
        },
        cardContainer: {
            marginTop: 12,
            marginLeft: 12,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-start',
            flex: 0.4,
        },
        buttonContainer: {
            height: 65,
            padding: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        infoContainer: {
            flex: 0.6,
            height: 200,
            padding: 10
        }
   })

    /** Icon Elements */
    const LeftSwipePay = () => {
        return (
            <View style={styles.iconButtonContainer}>{LeftIcon()}</View>
        )
    }
    const RightIcon = () => {
        return <IconButton size={65} icon={<Icon name="trash" size={50} color="black"/>} onTap={openDelete} color='#FF0000'/>
    }
    const LeftIcon = () => {
        return <IconButton size={65} icon={<Fontisto name="dollar" size={50} color="black"/>} onTap={openPay} color='#52FF00'/>
    }
    const RightSwipeDelete = () => {
        return (
            <View style={styles.iconButtonContainer}>{RightIcon()}</View>
        )
    }

    const Hr = (color) => {
        return (
            <View
                style={{
                borderBottomColor: color,
                borderBottomWidth: 1,
                }}
            />
        )
    }

    const SettingsIcon = (<IconButton size={50} color='rgb(255, 134, 117)' icon={<Icon name="settings" size={35} color="#FFF"/>} onTap={openSettings}/>)
    const AddIcon = (<IconButton size={65} color="#7A73C6" icon={<Icon name="plus" size={50} color="#FFF"/>} onTap={openAddCards}/>)

    const createDetailNumber = () => {
        try {
            let number = UserData.user.cards[currentIndex].number
            return "\t\t\t\t\t\t**** " + number.substring(number.length - 4)
        } catch (e) {
            return ""
        } 
    }

    useEffect(() => {
        if(carousel.currentIndex !== undefined) {
            setCurrentIndex(carousel.currentIndex)
        }
    }, [carousel.currentIndex])

    const createCard = (card) => {
        if (card.pay) {
            return (
                <Swipeable renderLeftActions={() => LeftSwipePay()} renderRightActions={() => RightSwipeDelete()}>            
                    <CardObject
                        cardType="pay"
                        cardData={{
                            name: card.name,
                            number: card.number,
                            bgColors: card.bgColors,
                            tap: card.tap,
                            issuer: card.issuer,
                            expiry: card.expiry,
                            logoImage: card.logoImage,
                            chip: card.chip
                    }}/>
                </Swipeable>
            )
        } else {
            console.log('Not implemented yet')
        }
    }      

    const renderCaroseulItem = ({item, index}) => {
        return createCard(item)
    }
    return (
        <MainContainer backBtn={false} topCenterChild={<TitleText text="Cards" style={{textAlign: 'left', flex: 1}}/>} topRightChild={SettingsIcon}>
            
                <View style={styles.cardContainer}>
                    <Carousel
                        ref={(c) => carousel = c}
                        onSnapToItem={setCurrentIndex}
                        vertical={true}
                        renderItem={renderCaroseulItem}
                        data={UserData.user.cards}
                        itemHeight={110}
                        sliderHeight={450}
                        activeSlideAlignment='start'
                        loop={true}
                        layout='tinder'
                        layoutCardOffset={10}
                        inactiveSlideShift={0}
                    />
                </View>
            {UserData.user.cards.length > 0 ?
                Hr(themeVar.t.colors.text):
                <RegularText text={'Press the + button to \nadd your first card!'} style={{flex: 1, textAlign: 'center'}}/>
            }
            {currentIndex !== undefined && UserData.user.cards.length > 0 ?
                <View style={styles.infoContainer}>
                    <RegularText text={'Number: ' + createDetailNumber()}/>
                </View>
            : 
            null}
            <View style={styles.buttonContainer}>
                {carousel.currentIndex !== -1 ? RightIcon(): <View></View>}
                {carousel.currentIndex !== -1 ? LeftIcon(): <View></View>}
                {AddIcon}
            </View>
        </MainContainer>
    )
}

export default HomeScreen