import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IconButton = ({icon, onTap, color, size}) => {
    const styleWithTheme = createStyle((t) => ({
        button: {
            width: size === null ? 45: size,
            height: size === null ? 45: size,
            backgroundColor: color !== null ? color: t.colors.card,
            borderRadius: size === null ? 25: 50,
            padding: 2,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: t.colors.text,
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.5
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