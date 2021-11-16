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

const HomeScreen = (props) => {
    const navigation = useNavigation();
    const currentUser = useContext(UserContext)

    /** Functions for navigation */
    const openSettings = () => {
        alert('Setting Screen')
        //navigation.navigate('Settings')
    }
    const openPay = (number) => {
        alert('Pay with '+number)
    }
    const openDelete = (number) => {
        alert('Delete card '+number)
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
            height: 400,
            marginTop: 12,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-start'
        }
   })

    /** Icon Elements */
    const LeftSwipePay = (card) => {
        return (
            <View style={styles.iconButtonContainer}><IconButton size={65} icon={<Fontisto name="dollar" size={55} color="black"/>} onTap={() => openPay.call(null, card)} color='#52FF00'/></View>
        )
    }
    const RightSwipeDelete = (card) => {
        return (
            <View style={styles.iconButtonContainer}><IconButton size={65} icon={<Icon name="trash" size={55} color="black"/>} onTap={() => openDelete.call(null, card)} color='#AD4636'/></View>
        )
    }
    const SettingsIcon = (<IconButton size={50} color='rgb(255, 134, 117)' icon={<Icon name="settings" size={35} color="#FFF"/>} onTap={openSettings}/>)

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
        ids: ['1', '2', '3']
    }

    const createCard = (index) => {
        return(
            <Swipeable renderLeftActions={() => LeftSwipePay(cardObjectInfoList.numbers[index])} renderRightActions={() => RightSwipeDelete(cardObjectInfoList.numbers[index])}>            
                <CardObject
                    fullname={cardObjectInfoList.name}
                    number={cardObjectInfoList.numbers[index]}
                    bgColors={cardObjectInfoList.bgColors[index]}
                    chip={cardObjectInfoList.chip[index]}
                    locked={cardObjectInfoList.locked[index]}
                    tap={cardObjectInfoList.tap[index]}
                    idstr={cardObjectInfoList.ids[index]}    
                    logoImage={cardObjectInfoList.logoImage[index]}
                />
            </Swipeable>
        )
    }      

    const renderCaroseulItem = ({item, index}) => {
        return createCard(item)
    }

    return (
        <MainContainer backBtn={false} topCenterChild={<TitleText text="Cards"/>} topRightChild={SettingsIcon}>
            <View style={styles.cardContainer}>
                <Carousel
                    vertical={true}
                    renderItem={renderCaroseulItem}
                    data={[0, 1, 2]}
                    itemHeight={190}
                    sliderHeight={400}
                    activeSlideAlignment='start'
                    loop={true}
                    layout='stack'
                    layoutCardOffset={80}
                    inactiveSlideShift={0}
                />
            </View>
        </MainContainer>
    )
}

export default HomeScreen