import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

const RegularText = (props) => {
    return (
        <Text style={styles.regularText}>
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    regularText: {
        fontFamily: 'Lato',
        fontSize: '24px'
    }
})

export default RegularText;