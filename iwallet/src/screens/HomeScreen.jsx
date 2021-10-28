import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, Alert, StyleSheet} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import Logo from '../components/Logo'
import TouchableTextButton from '../components/TouchableTextButton'
import BackButton from '../components/BackButton'

const HomeScreen = (props) => {
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return (
        <View style={styles.container}>
            <RegularText text="Home Screen"/>
            <TouchableTextButton text="Card Details Screen" onTap={() => props.navigation.navigate('CardDetails')}/>
            <TouchableTextButton text="Card Type Screen" onTap={() => props.navigation.navigate('CardType')}/>
            <TouchableTextButton text="Testing Screen" onTap={() => props.navigation.navigate('Test')}/>
            <TouchableTextButton text="Pin Screen" onTap={() => props.navigation.navigate('Pin')}/>
        </View>
    )
}

export default HomeScreen