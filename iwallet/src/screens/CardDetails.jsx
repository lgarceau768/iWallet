import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from '../components/BackButton';
import RegularText from '../components/RegularText'

const CardDetailsScreen = (props) => {
    
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return (
        <View style={styles.container}>
            <BackButton/>
            <RegularText text="CardDetailsScreen"/>
        </View>
    )
}

export default CardDetailsScreen