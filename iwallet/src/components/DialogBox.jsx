import React, { useState } from 'react'
import { Alert } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from './RegularText';
import TouchableTextButton from './TouchableTextButton';

const IDialogBox = (props) => {
    console.log('dialog box created')
    return (
        <TouchableTextButton text="Dialog Box" onPress={createDialogbox(props)}/>
    )
}

const createDialogbox = (props) =>{
        Alert.alert(
            props.title,
            props.text,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Yes",
                    style: "default"
                }
            ]
        )
    }

export default IDialogBox