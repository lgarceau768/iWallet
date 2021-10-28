import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import MainContainer from '../components/MainScreenContainer';
import RegularText from '../components/RegularText';
import TouchableTextButton from '../components/TouchableTextButton';

const IntroScreen = () => {
    const navigator = useNavigation();
    const screenTextArray = ['Secure Your Wallet!', 'Select which on e to use when needed!', 'Get started with your iWallet now!'];
    const [currentScreen, setCurrentScreen] = React.useState(0);
    const [buttonText, setButtonText] = React.useState('Get Started!');
    const [screenText, setScreenText] = React.useState(screenTextArray[currentScreen]);
    const screenPaths = ['https://github.com/lgarceau768/iWallet/blob/main/iwallet/assets/intro1.png', 'https://github.com/lgarceau768/iWallet/blob/main/iwallet/assets/intro2.png', 'https://github.com/lgarceau768/iWallet/blob/main/iwallet/assets/intro3.png']

    const nextScreen = () => {
        if(currentScreen >= 3) {
            navigator.navigate('Pin');
        } else {
            setCurrentScreen(currentScreen + 1)
        }
    }

    const styles = StyleSheet.create({
        imageStyle: {
            width: 332,
            height: 256,
        },
        container: {
            alignContent: 'center',
        }
    })

    return (
        <MainContainer backBtn={false} style={styles.container}> 
            { currentScreen !== 3 ? 
                <Logo isSmall={true}/>
            : null}
            { currentScreen == 2 ? 
                <RegularText text="Add your cards into your own digital wallet."/>
            : null}
            <Image style={styles.imageStyle} source={{ uri: screenPaths[currentScreen]}}/>
            <RegularText text={screenText}/>
            <TouchableTextButton text={buttonText}/>
        </MainContainer>
    )
}

export default IntroScreen