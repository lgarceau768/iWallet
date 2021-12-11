import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import RegularText from '../components/RegularText'
import ManualEntry from '../components/ManualEntry'
import MainContainer from '../components/MainScreenContainer'
import TitleText from '../components/TitleText'
import TouchableTextButton from '../components/TouchableTextButton'
import UserContext from '../redux/UserContext'
import { NavigationContainerRefContext, useNavigation } from '@react-navigation/native'

const ManualEntryScreen = (props) => {
    const UserData = useContext(UserContext)
    const styles = StyleSheet.create({
        container: {
            margin: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    const navigation = useNavigation()
    const { selectedTheme, themes, t} = useTheme()
    const {setTheme} = useThemeDispatch()


    const addCard = (card) => {
        let cardData = card.values
        let cardObj = {
            tap: true,
            pay: true,
            locked: false,
            chip: true,
            ...cardData,
        }
        console.log(cardObj)
        UserData.addCard(cardObj, console.log, () => {
            navigation.navigate('Home')
        })
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