import * as React from 'react'
import { createStyle, useStyle } from "@pavelgric/react-native-theme-provider";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgUri } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import RegularText from './RegularText';

const styleCreator = createStyle((t) => ({
    backButton: {
        flex: 1,
        padding: 2,
        color: t.colors.card,
        shadowOffset: {
            height: 2,
            width: 2,
        },
        shadowColor: t.colors.buttonShadow,
        shadowRadius: 4,
        shadowOpacity: 0.75
    }
}))

const BackButton = (props) => {
    const navigation = useNavigation();
    const goBack = function () {
        try {
            navigation.goBack()
        } catch (err) {}
    }
    const styles = useStyle(styleCreator)
    const backImage = "http://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/back.svg"
    return (
        <TouchableOpacity onPress={props.goBack === undefined ? goBack: props.goBack}>
            <SvgUri
                width={32}
                height={32}
                uri={backImage}
                style={styles.backButton}
            />
        </TouchableOpacity>
    )
}

export default BackButton;