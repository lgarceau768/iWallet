import React from 'react';
import gradient from 'random-gradient'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import { SvgUri } from 'react-native-svg';
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const CardObject = ({
    fullname, logoImage, number, chip, locked, tap, id
}) => {
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
    };
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

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
    const colors = [];
    for(let i = 0; i < getRandomInt(2); i++){
        colors.push(generateColor())
    }

    return (
        <LinearGradient 
            start={{x: }}
            colors={colors} 
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