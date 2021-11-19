import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText'
import TitleText from '../components/TitleText';
import { useNavigation } from '@react-navigation/native'
import TouchableTextButton from '../components/TouchableTextButton';

const CardTypeScreen = (props) => {
    const navigation = useNavigation();

    const manualEntryScreenChange = () => {
        navigation.navigate('ManualEntry');
    }
    const cardScannerScreenChange = () => {
        navigation.navigate('Scanner');
    }

    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="What type of card is it?"/>}>
            <TouchableTextButton onTap={manualEntryScreenChange.bind(this)} text="Manual Entry"/>
            <TouchableTextButton onTap={cardScannerScreenChange.bind(this)} text="Credit Card"/>
            <TouchableTextButton onTap={cardScannerScreenChange.bind(this)} text="ID Card"/>
            <TouchableTextButton onTap={cardScannerScreenChange.bind(this)} text="Non Tap Pay"/>
            <TouchableTextButton onTap={cardScannerScreenChange.bind(this)} text="Other"/>
        </MainContainer>
    )
}

export default CardTypeScreen