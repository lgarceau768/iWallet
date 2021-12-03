import * as React from 'react'
import { Text } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';

// Pull style from theme (t is current theme)


const TitleText = (props) => {
    const styleCreator = createStyle((t) => ({
        titleText: {
            fontFamily: 'Lato-Bold',
            paddingBottom: 40,
            fontSize: 34,
            fontWeight: 'bold',
            textAlign: 'center',
            color: t.colors.text,
            ...props.style
        }
    }))
    const styles = useStyle(styleCreator)
    return (
        <Text style={styles.titleText}>
            {props.text}
        </Text>
    )
}


export default TitleText