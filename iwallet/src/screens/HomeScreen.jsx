import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, Alert} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import Logo from '../components/Logo'

const HomeScreen = (props) => {
    
    return (
        <View>
            <RegularText text="Home Screen"/>
        </View>
    )
}

export default HomeScreen