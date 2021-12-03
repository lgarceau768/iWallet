import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from '../components/RegularText';
import Icon from 'react-native-vector-icons/Octicons';

function ButtonWithIcon ({text, onTap, iconName, iconSize, iconColor, exstyle}) {
    const themeCreator = createStyle((currentTheme) => ({
        button: {
            alignItems: 'center',
            justifyContent: "center",
            flexDirection: 'row',
            backgroundColor: currentTheme.colors.card,
            borderRadius: 10,
            margin: 15,
            maxWidth: '50%',
            padding: 15,
            flex: 0.5,
            flexBasis: 120,
            height: 100,
            shadowColor: currentTheme.colors.buttonShadow,
            shadowOffset: {width: 3, height: 4},
            shadowOpacity: currentTheme.values.buttonShadowOpacity,
            ...exstyle
        }
    }))
    const styles = useStyle(themeCreator)
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onTap}
        >
            <RegularText text={text} style={{flex: 1}}/>
            <Icon name={iconName} size={iconSize} color={iconColor}/>
        </TouchableOpacity>
    )     
}

export default ButtonWithIcon
