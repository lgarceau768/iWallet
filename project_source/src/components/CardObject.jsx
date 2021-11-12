import React from 'react';
import gradient from 'random-gradient'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import { SvgUri } from 'react-native-svg';
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RegularText from './RegularText';


const CardObject = ({
    fullname, logoImage, number, chip, locked, tap, id, bgColors
}) => {
    const chipUri = 'https://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/chip.svg'
    const themedStyle = createStyle((t) => ({
        container: {
            width: '95%',
            height: 170,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: t.colors.text,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            padding: 6
        },
        logo: {
            marginLeft: 6,
            marginTop: 15,
            width: 70,
            height: 40
        },
        spacedText: {
            marginLeft: 6,
            marginTop: 15
        },
        leftView: {
            justifyContent: 'flex-start',
            flexDirection: 'column',
            flex: 0.7
        },
        rightView: {
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 0.3
        }
    }))
    const styles = useStyle(themedStyle)
    // add spaces to the card number
    let displayNum = '';
    for(let i = 0; i < number.length + 4; i++) {
        if(i % 4 == 0 && i !== 0) {
            displayNum = displayNum + ' '
        } 
        displayNum = displayNum + number.charAt(i)
    }

    return (
        <LinearGradient 
            start={{x: 0, y: 0}}
            end={{x: 0.5, y: 0.5}}
            colors={bgColors} 
            style={styles.container}>
            <View style={styles.leftView}>
                <SvgUri uri={logoImage}
                    style={styles.logo}
                    width={70}
                    height={40}
                />
                <RegularText text={fullname} oppositeColor={true} style={styles.spacedText}/>
                <RegularText text={displayNum} oppositeColor={true} style={styles.spacedText}/>
            </View>
            <View style={styles.rightView}>
                { chip ? <SvgUri uri={chipUri} style={styles.logo} width={100} height={100} color='#F5B85F'/> : null}
            </View>
        </LinearGradient>
    )
}

export default CardObject;