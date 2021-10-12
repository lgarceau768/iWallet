import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
    const [loading, setLoading] = React.useState(false);
    const logoImage = "https://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/logo.png";
    return (
        <Image 
            source={{uri: logoImage}}
            style={styles.logo}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 622,
        height: 401
    }
})

export default Logo;