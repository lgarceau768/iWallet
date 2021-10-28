import { createStyle, useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, AlertIOS, TouchableHighlight, StyleSheet} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import Logo from '../components/Logo'
import PasscodeAuth from 'react-native-passcode-auth';
import MainContainer from '../components/MainScreenContainer'
import TouchableTextButton from '../components/TouchableTextButton'
import { FloatingAction } from "react-native-floating-action";
import { TouchableOpacity } from 'react-native-gesture-handler'
import PinButton from '../components/PinButton'
import Numpad from '../components/NumPad'

const PinScreen = (props) => {
    const styles = StyleSheet.create({
        container: {
            margin: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

return (
    <MainContainer backBtn={true} topCenterChild={<RegularText text="Pin Screen"/>}>
        <View style={styles.container}>
            <RegularText text="Enter Pin"/>
        </View>
        <RegularText text="####" oppositeColor={false} extraStyle={{textAlign: 'center', fontSize: 50, margin: 50}}/>
        <Numpad/>
    </MainContainer>
)
}

export default PinScreen