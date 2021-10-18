import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, Alert} from 'react-native'
import IButton from '../../components/Button'
import RegularText from '../../components/RegularText'
import Logo from '../../components/Logo'

const IndexScreen = (props) => {
    const [currentScreen, setCurrentScreen] = useState(0)
    const [screens, setScreens] = useState([])
    const nextScreen = () => {
        if(currentScreen => screens.length) {
            props.onNext()
        } else {
            setCurrentScreen(currentScreen + 1)
        }
    }
    const { selectedTheme, themes, t} = useTheme()
    const {setTheme} = useThemeDispatch()
    
    const toggleTheme = () => {
        const nextTheme = selectedTheme === 'dark' ? 'light': 'dark'
        setTheme(nextTheme)
    }

    
    return (
        <View>
            <Logo/>
            <RegularText text="Hello"/>
            <IButton onTap={toggleTheme.bind(this)} text="Theme"/>
        </View>
    )
}

export default IndexScreen