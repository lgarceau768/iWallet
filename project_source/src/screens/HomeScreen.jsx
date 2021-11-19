import React, { useState, useContext, useRef } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, Animated, StyleSheet, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Carousel from 'react-native-snap-carousel';

import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'
import IconButton from '../components/IconButton'
import UserContext from '../redux/UserContext'
import CardObject from '../components/CardObject'
import { useTheme } from '@pavelgric/react-native-theme-provider'

const HomeScreen = (props) => {
    const navigation = useNavigation();
    const currentUser = useContext(UserContext)
    const currentTheme = useTheme()
    const [currentIndex, setCurrentIndex] = useState(0)


    /** Functions for navigation */
    const openSettings = () => {
        alert('Setting Screen')
        //navigation.navigate('Settings')
    }
    const openAddCards = () => {
        alert('Add Card Screen')
        //navigation.navigate('Settings')
    }
    const openPay = () => {
        alert('Pay with '+cardObjectInfoList.numbers[currentIndex])
    }
    const openDelete = () => {
        alert('Delete card '+cardObjectInfoList.numbers[currentIndex])
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
            flex: 1,
        },
        buttonContainer: {
            height: 65,
            padding: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
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
    const SettingsIcon = (<IconButton size={50} color='rgb(255, 134, 117)' icon={<Icon name="settings" size={35} color="#FFF"/>} onTap={openSettings}/>)
    const AddIcon = (<IconButton size={65} color="#7A73C6" icon={<Icon name="plus" size={50} color="#FFF"/>} onTap={openAddCards}/>)

    //TODO remove this
    const cardObjectInfoList = {
        name: 'Luke Garceau',
        numbers: [
            '0000111122223333',
            '4444555566667777',
            '8888999900001234'
        ],
        logoImage: [
            'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/visa_logo.svg',
            'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/mastercard.svg',
            'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/visa_logo.svg'
        ],
        chip: [true, false, true],
        tap: [true, false, true],
        locked: [false, true, false],
        bgColors: [
            ['#F6C4ED', '#E1DAE6'],
            ['#02AAB0', '#00CDAC'],
            ['#5DE0F0', '#F7A6F5']
        ],
        cardName: ['49er', 'Work ID', 'Costco'],
        iconName: ['podcast', 'child', 'telegram'],
        ids: ['1', '2', '3'],
        exp: ['05/31', '11/23', '01/22']
    }

    const createCard = (index) => {
        if(index == 1) {
            return (
                <Swipeable renderLeftActions={() => LeftSwipePay()} renderRightActions={() => RightSwipeDelete()}>            
                    <CardObject
                        cardType="id"
                        cardData={{
                            fullname: cardObjectInfoList.name,
                            number: cardObjectInfoList.numbers[index],
                            bgColors: cardObjectInfoList.bgColors[index],
                            tap: cardObjectInfoList.tap[index],
                            cardName: cardObjectInfoList.cardName[index],
                            exp: cardObjectInfoList.exp[index],
                            iconName: cardObjectInfoList.iconName[index]
                    }}/>
                </Swipeable>
            )
        }
        return(
            <Swipeable renderLeftActions={() => LeftSwipePay()} renderRightActions={() => RightSwipeDelete()}>            
                <CardObject
                    cardType="pay"
                    cardData={{
                        fullname: cardObjectInfoList.name,
                        number: cardObjectInfoList.numbers[index],
                        bgColors: cardObjectInfoList.bgColors[index],
                        chip: cardObjectInfoList.chip[index],
                        locked: cardObjectInfoList.locked[index],
                        tap: cardObjectInfoList.tap[index],
                        idstr: cardObjectInfoList.ids[index],
                        logoImage: cardObjectInfoList.logoImage[index],
                        exp: cardObjectInfoList.exp[index]
                }}/>
            </Swipeable>
        )
    }      

    const renderCaroseulItem = ({item, index}) => {
        return createCard(item)
    }

    return (
        <MainContainer backBtn={false} topCenterChild={<TitleText text="Cards" style={{textAlign: 'left'}}/>} topRightChild={SettingsIcon}>
            <View style={styles.cardContainer}>
                <Carousel
                    onSnapToItem={setCurrentIndex}
                    vertical={true}
                    renderItem={renderCaroseulItem}
                    data={[0, 1, 2]}
                    itemHeight={110}
                    sliderHeight={450}
                    activeSlideAlignment='start'
                    loop={true}
                    layout='tinder'
                    layoutCardOffset={10}
                    inactiveSlideShift={0}
                />
            </View>
            <View style={styles.buttonContainer}>
                {currentIndex !== -1 ? RightIcon(cardObjectInfoList.numbers[currentIndex]): <View></View>}
                {currentIndex !== -1 ? LeftIcon(cardObjectInfoList.numbers[currentIndex]): <View></View>}
                {AddIcon}
            </View>
        </MainContainer>
    )
}

export default HomeScreen