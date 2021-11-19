import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton';
import ButtonWithIcon from '../components/ButtonWithIcon';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText'
import TitleText from '../components/TitleText';
import { useNavigation } from '@react-navigation/native'

const CardTypeScreen = (props) => {
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
    const openManualEntry = () => {
        alert('Manual Entry Screen')
        //navigations.navigate('ManualEntry')
    }
    const openAddCard = () => {
        alert('Add Card Screen')
        //navigations.navigate('AddCard')
    }
    const openAddIDCard = () => {
        alert('Add ID Card Screen')
        //navigations.navigate('AddIDCard')
    }
    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="CardType Screen"/>}>
            <RegularText text="What type of card is it?"/>
            <ButtonWithIcon onTap={openAddCard} text='Credit Card' iconName='credit-card' iconSize='35' iconColor='000'></ButtonWithIcon>
            <ButtonWithIcon onTap={openAddIDCard} text='ID Card' iconName='person' iconSize='30' iconColor='000'></ButtonWithIcon>
            <ButtonWithIcon onTap={openManualEntry} text='Other' iconName='device-camera' iconSize='30' iconColor='000'></ButtonWithIcon>
        </MainContainer>
    )
}

export default CardTypeScreen