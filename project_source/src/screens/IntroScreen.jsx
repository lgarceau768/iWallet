import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText';
import TouchableTextButton from '../components/TouchableTextButton';
import { useTheme } from '@pavelgric/react-native-theme-provider';

const IntroScreen = () => {
    const { t } = useTheme()
    const navigator = useNavigation();
    const screenTextArray = ['Secure Your Wallet!', 'Select which one to use when needed!', 'Get started with your iWallet now!'];
    const screenPaths = ['http://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/intro1.png', 
                            'http://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/intro2.png', 
                            'http://raw.githubusercontent.com/lgarceau768/iWallet/main/project_source/assets/intro3.png']
    const onDone = () => {
        navigator.navigate('Pin')
    }
    
    const introSlides = [
        {
            key: 1,
            index: 0,
            title: 'small',
            text: screenTextArray[0],
            image: screenPaths[0]
        },
        {
            key: 2,
            index: 1,
            title: 'small',
            text: screenTextArray[1],
            image: screenPaths[1]
        },
        {
            key: 3,
            index: 2,
            title: 'small',
            text: screenTextArray[2],
            image: screenPaths[2]
        }
    ]

    const renderIntroSlide = ({ item }) => {
        return (
            <View>                
                { item.index != 2 ?
                    <Logo withImage={true} style={{marginTop: 32}}/>
                :   <Logo style={{marginTop: 32}}/>
                }
                { item.index == 1 ? 
                    <RegularText text="Add your cards into your own digital wallet." style={{textAlign: 'center'}}/>
                : <View></View>}
                { item.index != 2 ?<Image style={styles.imageStyle} source={{ uri: item.image}}/> : <View></View>}
                <RegularText text={item.text} style={{textAlign: 'center', marginTop: 48}}/>
            </View>
        )
    }

    const renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-arrow-forward"
              color={t.colors.text}
              size={24}
            />
          </View>
        )
    }
    const renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-checkmark"
              color={t.colors.text}
              size={24}
            />
          </View>
        )
    }

    const styles = StyleSheet.create({        
        buttonCircle: {
            width: 40,
            height: 40,
            backgroundColor: t.colors.primary,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageStyle: {
            width: 332,
            height: 280,
            alignSelf: 'center',
            marginTop: 16
        },
        container: {
            alignContent: 'center',
        }
    })
    return (        
        <MainContainer backBtn={false}>
            <AppIntroSlider
                renderItem={renderIntroSlide}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                data={introSlides}
                onDone={onDone}/>
        </MainContainer>
    )
}

export default IntroScreen