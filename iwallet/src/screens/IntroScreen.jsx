import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText';
import TouchableTextButton from '../components/TouchableTextButton';

const IntroScreen = () => {
    const navigator = useNavigation();
    const screenTextArray = ['Secure Your Wallet!', 'Select which one to use when needed!', 'Get started with your iWallet now!'];
    const buttonTextArray = ['Get Started', 'Next', 'Setup Pin!']
    const screenPaths = ['http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/intro1.png', 
                            'http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/intro2.png', 
                            'http://raw.githubusercontent.com/lgarceau768/iWallet/main/iwallet/assets/intro3.png']
    const [currentScreen, setCurrentScreen] = React.useState(1);
    const [buttonText, setButtonText] = React.useState(buttonTextArray[currentScreen - 1]);
    const [screenText, setScreenText] = React.useState(screenTextArray[currentScreen - 1]);
    const [currentImage, setCurrentImage] = React.useState(screenPaths[currentScreen - 1]);

    const nextScreen = () => {
        if(currentScreen >= 4) {
            navigator.navigate('Pin');
        } else {
            setCurrentScreen(currentScreen + 1)
            setScreenText(screenTextArray[currentScreen])
            setCurrentImage(screenPaths[currentScreen])
        }
    }

    const styles = StyleSheet.create({
        imageStyle: {
            width: 332,
            height: 280,
            alignSelf: 'center'
        },
        container: {
            alignContent: 'center',
        }
    })
    console.log(currentScreen)
    return (
        <MainContainer backBtn={false} style={styles.container}> 
            { currentScreen != 3 ?
                <Logo withImage={true}/>
            :   <Logo/>
            }
            { currentScreen == 2 ? 
                <RegularText text="Add your cards into your own digital wallet." extraStyle={{textAlign: 'center'}}/>
            : null}
            <Image style={styles.imageStyle} source={{ uri: currentImage}}/>
            <RegularText text={screenText} extraStyle={{textAlign: 'center'}}/>
            <TouchableTextButton text={buttonText} onTap={nextScreen}/>
        </MainContainer>
    )
}

export default IntroScreen