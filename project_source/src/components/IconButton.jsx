import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IconButton = ({icon, onTap}) => {
    const styleWithTheme = createStyle((t) => ({
        button: {
            width: 45,
            height: 45,
            backgroundColor: t.colors.card,
            borderRadius: 25,
            padding: 2,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: t.colors.buttonShadow,
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: t.colors.buttonShadowOpacity,
        }
    }))
    const styles = useStyle(styleWithTheme)
    return (
        <TouchableOpacity onPress={onTap} style={styles.button}>
            {icon}
        </TouchableOpacity>
    )
}

export default IconButton