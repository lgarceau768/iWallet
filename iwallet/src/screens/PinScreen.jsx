import React, { useState } from 'react'
import { View, Text, AlertIOS, TouchableHighlight, StyleSheet} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import MainContainer from '../components/MainScreenContainer'
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

