import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText'
import TitleText from '../components/TitleText';

const CardTypeScreen = (props) => {
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="CardType Screen"/>}>
            <BackButton/>
            <RegularText text="CardTypeScreen"/>
        </MainContainer>
    )
}

export default CardTypeScreen