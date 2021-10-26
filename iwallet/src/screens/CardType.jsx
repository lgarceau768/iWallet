import React from 'react'
import { View, StyleSheet } from 'react-native'
import RegularText from '../components/RegularText'

const CardTypeScreen = (props) => {
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return (
        <View style={styles.container}>
            <RegularText text="CardTypeScreen"/>
        </View>
    )
}

export default CardTypeScreen