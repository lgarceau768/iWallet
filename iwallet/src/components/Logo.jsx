import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Logo = () => {
    const [loading, setLoading] = React.useState(false);
    const logoImage = "http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/logo.svg";
    return (
        <SvgUri 
            width="100%"
            height="100%"
            uri={logoImage}
            style={styles.logo}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 401,
        alignSelf: 'flex-start'
    }
})

export default Logo;