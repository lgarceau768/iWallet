import React, { useState } from 'react'
import { View, Text, Alert} from 'react-native'
import IButton from '../../components/Button'

const IndexScreen = (props) => {
    const [currentScreen, setCurrentScreen] = useState(0)
    const [screens, setScreens] = useState([])
    const nextScreen = () => {
        if(currentScreen => screens.length) {
            props.onNext()
        } else {
            setCurrentScreen(currentScreen + 1)
        }
    }

    
    return (
        <View>
            <IButton onClick={() => Alert.alert('btn clicked')} text="Test Button"/>
        </View>
    )
}

export default IndexScreen