import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from '../components/RegularText';
import Icon from 'react-native-vector-icons/AntDesign'

function ButtonWithIcon ({text, onTap, iconName, size, color}) {
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
        <Icon name={iconName}
        </TouchableOpacity>
        </View>
    )     
}
