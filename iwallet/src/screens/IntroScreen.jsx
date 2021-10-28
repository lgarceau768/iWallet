import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
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


    const nextScreen = () => {
        if(currentScreen >= 3) {
            navigator.navigate('Pin');
        } else {
            setCurrentScreen(currentScreen + 1)
        }
    }

    return (
        <MainContainer backBtn={false}>
            <Logo isSmall={true}/>
            { currentScreen == 2 ? 
                <RegularText text="Add your cards into your own digital wallet."/>
            : null}
            <RegularText text={screenText}/>
            <TouchableTextButton text={buttonText}/>
        </MainContainer>
    )
}