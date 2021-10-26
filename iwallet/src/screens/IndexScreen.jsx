import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, Alert, StyleSheet} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import Logo from '../components/Logo'
import TouchableTextButton from '../components/TouchableTextButton'

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

    /** Theme stuff */
    const { selectedTheme, themes, t} = useTheme()
    const {setTheme} = useThemeDispatch()
    
    const toggleTheme = () => {
        const nextTheme = selectedTheme === 'dark' ? 'light': 'dark'
        setTheme(nextTheme)
    }

    const changeScreen = () => {
        props.navigation.navigate('Home');
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    
    return (
        <View style={styles.container}>
            <Logo/>
            <RegularText text="Hello"/>
            <TouchableTextButton onTap={changeScreen.bind(this)} text="HomeScreen"/>
            <TouchableTextButton onTap={toggleTheme.bind(this)} text="Theme"/>
        </View>
    )
}

export default IndexScreen