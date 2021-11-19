import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from '../components/RegularText';
import Icon from 'react-native-vector-icons/Octicons';

function ButtonWithIcon ({text, onTap, iconName, iconSize, iconColor}) {
    const themeCreator = createStyle((currentTheme) => ({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: 'center'
        },
        button: {
            alignItems: 'center',
            justifyContent: "center",
            backgroundColor: currentTheme.colors.card,
            borderRadius: 10,
            padding: 15,
            height: 100,
            width: 200,
            shadowColor: currentTheme.colors.buttonShadow,
            shadowOffset: {width: 3, height: 4},
            shadowOpacity: currentTheme.values.buttonShadowOpacity,
        }
    }))

    const styles = useStyle(themeCreator)
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={onTap}
        >
            <RegularText text={text}/>
            <Icon name={iconName} size={iconSize} color={iconColor}></Icon>
        </TouchableOpacity>
        </View>
    )     
}

export default ButtonWithIcon
