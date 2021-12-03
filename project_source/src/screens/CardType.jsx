import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton';
import ButtonWithIcon from '../components/ButtonWithIcon';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText'
import TitleText from '../components/TitleText';
import { useNavigation } from '@react-navigation/native'
import TouchableTextButton from '../components/TouchableTextButton';

const CardTypeScreen = (props) => {
    const navigation = useNavigation()
    
    const styles = StyleSheet.create({
        container: {
            marginTop: 15,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
        },
    });
    const openManualEntry = () => {
        navigation.navigate('ManualEntry')
    }
    const openAddCard = () => {
        navigation.navigate('AddCard')
    }
    const openAddIDCard = () => {
        navigation.navigate('AddIDCard')
    }
    return (
        <MainContainer backBtn={true} topCenterChild={<TitleText text="What type of card?" style={{textAlign: 'center', flex: 1}}/>}>
            <View style={styles.container}>
                <ButtonWithIcon onTap={openManualEntry} text='Credit Card' iconName='credit-card' iconSize={35} iconColor='#000'/>
                <ButtonWithIcon onTap={openAddIDCard} text='ID Card' iconName='person' iconSize={30} iconColor='#000'/>
                <ButtonWithIcon onTap={openAddCard} text='Other' iconName='device-camera' iconSize={30} iconColor='#000'/>
            </View>
        </MainContainer>
    )
}

export default CardTypeScreen