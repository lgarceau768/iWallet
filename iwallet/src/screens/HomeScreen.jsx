import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, Alert, StyleSheet} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import Logo from '../components/Logo'
import TouchableTextButton from '../components/TouchableTextButton'
import BackButton from '../components/BackButton'
import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'

const HomeScreen = (props) => {
    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="Cards"/>}>
            <RegularText text="Home Screen"/>
            <TouchableTextButton text="Card Details Screen" onTap={() => props.navigation.navigate('CardDetails')}/>
            <TouchableTextButton text="Card Type Screen" onTap={() => props.navigation.navigate('CardType')}/>
            <TouchableTextButton text="Testing Screen" onTap={() => props.navigation.navigate('Test')}/>
            <TouchableTextButton text="Pin Screen" onTap={() => props.navigation.navigate('Pin')}/>
            <TouchableTextButton text="Manual Entry" onTap={() => props.navigation.navigate('ManualEntry')}/>
        </MainContainer>
    )
}

export default HomeScreen