import * as React from 'react';
import { Image } from 'react-native';

const Logo = () => {
    const loading = React.useState(false);
    
    return (
        <Image 
            source={logoImage}
        />
    )
}