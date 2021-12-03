import * as React from 'react'
import { Text } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';



const RegularText = (props) => {
    // Pull style from theme (t is current theme)
    const styleCreator = createStyle((t) => ({
        regularText: {
            fontSize: 22,
            color: props.oppositeColor ? t.colors.oppositeThemeText : t.colors.text,
            ...props.style
        }
    }))
    const styles = useStyle(styleCreator)
    return (
        <Text style={styles.regularText}>
            {props.text}
        </Text>
    )
}


export default RegularText;