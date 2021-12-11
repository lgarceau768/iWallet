import React, { useState } from 'react'
import { Alert } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from './RegularText';
import TouchableTextButton from './TouchableTextButton';

function IDialogBox ({title, text, onCancel, onYes}) {
    Alert.alert(
    title,
    text,
    [
        {
        text: "Cancel",
        onPress: onCancel,
        style: "cancel"
        },
        { text: "OK", onPress: onYes }
    ]
    );
}


export default IDialogBox