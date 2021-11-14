import React, { useState } from 'react'
import { Alert } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from './RegularText';
import TouchableTextButton from './TouchableTextButton';

function IDialogBox ({title, text, }) {
    console.log('dialog box created')
    Alert.alert(
    title,
    text,
    [
        {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
    );
}


export default IDialogBox