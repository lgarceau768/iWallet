import React from 'react';
import { createStyle, useStyle, useTheme } from '@pavelgric/react-native-theme-provider';
import { SvgUri } from 'react-native-svg';
import { View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RegularText from './RegularText';
import Icon from 'react-native-vector-icons/Fontisto'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const CardObject = ({
    cardType, cardData, onLocked, index
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
        spacer: {
            height: 105,
        },
        icon: {
            height: 70,
            marginTop: 15,
            marginLeft: 6
        },
        chip: {
            marginLeft: 6,
            marginTop: 15,
        },
        spacedText: {
            marginLeft: 6,
            marginTop: 15,
            marginRight: 6,
        },
        moreSpacedText: {
            marginLeft: 6,
            marginTop: 35,
            marginRight: 6,
        },
        leftView: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flex: cardType == 'pay' ? 0.7: 0.6,
        },
        rightView: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column',
            flex: cardType == 'pay' ? 0.3: 0.4,
        },
        smallSpacer: {
            height: 60
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
    const LockedIcon = (<Icon name='locked' size={68} color={currentTheme.t.lockedColor} style={styles.lockIcon}/>)

    if(cardType == 'pay') {
        // add spaces to the card numbe
        console.log(cardData)
        const CardComponent = (
            <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 0.5, y: 0.5}}
                colors={cardData.bgColors} 
                style={styles.container}>
                <View style={styles.leftView}>
                    <SvgUri uri={cardData.logoImage}
                        style={styles.logo}
                        width={70}
                        height={40}
                    />
                    <RegularText text={cardData.name} oppositeColor={true} style={styles.moreSpacedText}/>
                    <RegularText text={cardData.number} oppositeColor={true} style={styles.spacedText}/>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.smallSpacer}></View>
                    { cardData.chip ? <Image source={require('../../assets/chip.png')} style={styles.logo} color='#F5B85F'/> : <View style={styles.logo}></View>}
                    <RegularText text={cardData.expiry} oppositeColor={true} style={styles.spacedText}/>
                </View>
            </LinearGradient>
        )
    
        return (

            <TouchableOpacity style={styles.lockedStyle} onPress={() => {
                if(cardData.locked) {
                    onLocked(index)
                }
            }}>                
            {CardComponent}
            {cardData.locked ? LockedIcon: null}
        </TouchableOpacity>
        )
    } else if(cardType == 'id') {
        // fields will be
        //console.log(cardData)
        const { number, name, expiry, tap, issuer, iconName, bgColors } = cardData 
        return (
            <LinearGradient 
                start={{x: 0, y: 0}}
                end={{x: 0.5, y: 0.5}}
                colors={bgColors} 
                style={styles.container}>
                <View style={styles.leftView}>
                    <FontAwesome name={iconName} size={70} color={currentTheme.t.oppositeThemeText} style={styles.icon}/>
                    <RegularText text={issuer} oppositeColor={true} style={styles.moreSpacedText}/>
                    <RegularText text={number} oppositeColor={true} style={styles.spacedText}/>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.spacer}></View>
                    <RegularText text={name} oppositeColor={true} style={styles.spacedText}/>
                    <RegularText text={expiry} oppositeColor={true} style={styles.spacedText}/>
                </View>
            </LinearGradient>
        )
    }

    
}

export default CardObject;