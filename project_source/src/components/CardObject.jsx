import React from 'react';
import { createStyle, useStyle, useTheme } from '@pavelgric/react-native-theme-provider';
import { SvgUri } from 'react-native-svg';
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RegularText from './RegularText';
import Icon from 'react-native-vector-icons/Fontisto'
import { TouchableOpacity } from 'react-native-gesture-handler';


const CardObject = ({
    fullname, logoImage, number, chip, locked, tap, idstr, bgColors
}) => {
    const currentTheme = useTheme();

    const themedStyle = createStyle((t) => ({
        container: {
            width: '95%',
            height: 230,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: t.colors.text,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            padding: 6,
        },
        logo: {
            marginTop: 15,
            width: 70,
            height: 40,
        },
        chip: {
            marginLeft: 6,
            marginTop: 15,
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
            alignItems: 'flex-end',
            flexDirection: 'column',
            flex: 0.3
        },
        lockedStyle: {
            zIndex: 10,
        },
        lockIcon: {
            bottom: 120,
            left: '40%'
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
    
    const LockedIcon = (<Icon name='locked' size={68} color={currentTheme.t.lockedColor} style={styles.lockIcon}/>)

    const CardComponent = (
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
                { chip ? <Image source={require('../../assets/chip.png')} style={styles.logo} color='#F5B85F'/> : null}
            </View>
        </LinearGradient>
    )

    if(locked) {
        return (
            // TODO change the onPress to pop up an alert
            <TouchableOpacity style={styles.lockedStyle} onPress={() => alert('This card is locked')}>                
                {CardComponent}
                {LockedIcon}
            </TouchableOpacity>
        )
    } else {
        return CardComponent
    }
}

export default CardObject;