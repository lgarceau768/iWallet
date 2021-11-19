import React from 'react'
import {StyleSheet, View} from 'react-native'
import ManualEntry from '../components/ManualEntry'
import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'
import TouchableTextButton from '../components/TouchableTextButton'
import { useNavigation } from '@react-navigation/native'

const ManualEntryScreen = (props) => {

    const navigation = useNavigation();

    const manualEntryScreenChange = () => {
        navigation.navigate('Home');
    }

    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="Manual CC Entry"/>}>
            <ManualEntry />
            <TouchableTextButton onTap={manualEntryScreenChange.bind(this)} text="Continue"/>
        </MainContainer>
    )
}

export default ManualEntryScreen