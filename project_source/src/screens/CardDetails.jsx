import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText'
import TitleText from '../components/TitleText';

const CardDetailsScreen = (props) => {
    
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="Card Details Screen"/>}>
            
            <RegularText text="CardDetailsScreen"/>
        </MainContainer>
    )
}

export default CardDetailsScreen