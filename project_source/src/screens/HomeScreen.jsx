import React, { useState, useContext } from 'react'
import RegularText from '../components/RegularText'
import Icon from 'react-native-vector-icons/Feather'
import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'
import IconButton from '../components/IconButton'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, AsyncStorage } from 'react-native'
import UserContext from '../redux/UserContext'

const HomeScreen = (props) => {
    const navigation = useNavigation();
    const currentUser = useContext(UserContext)

    const openSettings = () => {
        navigation.navigate('Settings')
    }

    const style = StyleSheet.create({
        icon: {
            flex: 1,
            alignSelf: 'center',
        }
    })

    const SettingsIcon = (<IconButton icon={<Icon name="settings" size={35} color="#FFF" style={style.icon}/>} onTap={openSettings}/>)


    return (
        <MainContainer backBtn={false} topCenterChild={<TitleText text="Cards"/>} topRightChild={SettingsIcon}>
        </MainContainer>
    )
}

export default HomeScreen