import * as React from 'react'
import { Text } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';

// Pull style from theme (t is current theme)
const styleCreator = createStyle((t) => ({
    titleText: {
        fontFamily: 'Lato',
        fontSize: 30,
        color: t.colors.text
    }
}))

const TitleText = (props) => {
    const styles = useStyle(styleCreator)
    return (
        <Text style={styles.titleText}>
            {props.text}
        </Text>
    )
}


export default RegularText;TitleText