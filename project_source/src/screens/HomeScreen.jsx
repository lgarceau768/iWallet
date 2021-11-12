import React, { useState, useContext } from 'react'
import RegularText from '../components/RegularText'
import Icon from 'react-native-vector-icons/Feather'
import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'
import IconButton from '../components/IconButton'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, AsyncStorage } from 'react-native'
import UserContext from '../redux/UserContext'
import CardObject from '../components/CardObject'

const HomeScreen = (props) => {
    const navigation = useNavigation();
    const currentUser = useContext(UserContext)

    const openSettings = () => {
        //navigation.navigate('Settings')
    }


    const SettingsIcon = (<IconButton icon={<Icon name="settings" size={35} color="#FFF"/>} onTap={openSettings}/>)


    return (
        <MainContainer backBtn={false} topCenterChild={<TitleText text="Cards"/>} topRightChild={SettingsIcon}>
            <CardObject
                fullname='Luke Garceau'
                logoImage='https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/visa_logo.svg'
                number='0000111122223333'
                chip={true}
                tap={true}
                locked={false}
                bgColors={['#02AAB0', '#00CDAC']}
                id="3782942380947203"
            />
        </MainContainer>
    )
}

export default HomeScreen