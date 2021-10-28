import * as React from 'react'
import { Text } from 'react-native'
import { createStyle, useStyle, useTheme } from '@pavelgric/react-native-theme-provider';

// Pull style from theme (t is current theme)
const styleCreator = createStyle((t) => ({
    smallText: {
        fontFamily: 'Lato',
        color: t.colors.text
    }
}))

const SmallText = (props) => {
    const styles = useStyle(styleCreator)
    return (
        <Text style={styles.smallText}>
            {props.text}
        </Text>
    )
}


export default SmallText;