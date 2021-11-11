import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, Button } from 'react-native'

function IButton (props) {

    return (
        <Button onPress={props.onTap} title={props.text}/>
    )
}

export default IButton