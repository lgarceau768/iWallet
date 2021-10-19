import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, Alert} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import Logo from '../components/Logo'

const SettingsScreen = (props) => {
    
    return (
        <View>
            <RegularText text="SettingsScreen"/>
        </View>
    )
}

export default SettingsScreen