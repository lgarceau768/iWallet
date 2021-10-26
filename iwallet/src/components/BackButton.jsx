import { createStyle, useStyle } from "@pavelgric/react-native-theme-provider";
import { StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";

const styleCreator = createStyle((t) => ({
    backButton: {
        fontFamily: 'Lato',
        fontSize: 24,
        color: t.colors.text
    }
}))

const BackButton = (props) => {
    const styles = useStyle()
    const backImage = "http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/backbtn.svg"
    return (
        <SvgUri
            width="50%"
            height="50%"
            uri={backImage}
            style={styles.backButton}
        />
    )
}

export default BackButton;