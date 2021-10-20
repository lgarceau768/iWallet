import * as React from 'react'
import { Text } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';

// Pull style from theme (t is current theme)
const styleCreator = createStyle((t) => ({
    regularText: {
        fontFamily: 'Lato',
        fontSize: 24,
        color: t.colors.text
    }
}))

const RegularText = (props) => {
    const styles = useStyle(styleCreator)
    return (
        <Text style={styles.regularText}>
            {props.text}
        </Text>
    )
}


export default RegularText;