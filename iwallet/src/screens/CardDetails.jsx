import React from 'react'
import { View, StyleSheet } from 'react-native'
import RegularText from '../components/RegularText'

const CardDetailsScreen = (props) => {
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    return (
        <View style={styles.container}>
            <RegularText text="CardDetailsScreen"/>
        </View>
    )
}

export default CardDetailsScreen