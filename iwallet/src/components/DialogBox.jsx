import React, { useState } from 'react'
import { Alert } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from './RegularText';
import TouchableTextButton from './TouchableTextButton';

const IDialogBox = () => {
    console.log('alert box created')
    const createDialogbox = () =>{
        Alert.alert(
            "Caution",
            "Are you sure you want to delete this card?",
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
    return (
        <TouchableTextButton text="Dialog Box" onTap={createDialogbox}/>
    )
}



export default IDialogBox