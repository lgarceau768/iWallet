import * as React from 'react'
import { createStyle, useStyle } from "@pavelgric/react-native-theme-provider";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";

const BackButton = (props) => {
    const styleCreator = createStyle((t) => ({
        backButton: {
            width: 54,
            height: 42,
            shadowOffset: {
                height: 2,
                width: 2,
            },
            color: t.colors.card,
            shadowColor: t.colors.buttonShadow,
            shadowOpacity: 0.2
        }
    }))

    const goBack = function () {
        props.navigation.goBack()
    }
    const styles = useStyle(styleCreator)
    const backImage = "http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/back.svg"
    return (
        <TouchableOpacity onPress={goBack}>
            <SvgUri
                uri={backImage}
                style={styles.backButton}
            />
        </TouchableOpacity>
    )
}

export default BackButton;