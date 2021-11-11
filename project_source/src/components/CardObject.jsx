import React from 'react';
import gradient from 'random-gradient'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import { SvgUri } from 'react-native-svg';
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const CardObject = ({
    fullname, logoImage, number, chip, locked, tap, id, bgColors
}) => {

    const themedStyle = createStyle((t) => ({
        container: {
            width: '90%',
            height: 160,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: t.colors.text,
            justifyContent: 'flex-start',
            padding: 6
        },
        logo: {
            width: 70,
            height: 40
        }
    }))
    const styles = useStyle(themedStyle)

    return (
        <LinearGradient 
            start={{x: 0, y: 0}}
            end={{x: 0.5, y: 0.5}}
            colors={bgColors} 
            style={styles.container}>
            <SvgUri uri={logoImage}
                style={styles.logo}
                width={70}
                height={40}
            />
        </LinearGradient>
    )
}

export default CardObject;