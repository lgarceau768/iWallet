import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import RegularText from '../components/RegularText'
import ManualEntry from '../components/ManualEntry'
import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'
import TouchableTextButton from '../components/TouchableTextButton'

const ManualEntryScreen = (props) => {
    const styles = StyleSheet.create({
        container: {
            margin: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const { selectedTheme, themes, t} = useTheme()
    const {setTheme} = useThemeDispatch()


    const addCard = (card) => {
        let cardData = card.values
    }


    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="Manual CC Entry"/>}>
            <ManualEntry onDone={(card) => {
                addCard(card)
            }}/>
        </MainContainer>
    )
}

export default ManualEntryScreen