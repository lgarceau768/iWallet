import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Logo = (props) => {
    const [loading, setLoading] = useState(false);
    const logoImage = "http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/logo.svg";
    const logoSmallImage = "http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/logo_small.svg";
    const isSmall = props.withImage ?? false; // true false
    if(isSmall) {
        return (
            <SvgUri 
                uri={logoSmallImage}
                style={styles.logo}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
            />
        )
    }
    // render for the logo with the image
    return (
        <SvgUri 
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
        width: 622,
        alignSelf: 'center',
    }
})

export default Logo;