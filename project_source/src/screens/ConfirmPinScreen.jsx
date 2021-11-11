import React, { useEffect, useState, useContext } from 'react'
import { View, StyleSheet} from 'react-native'
import RegularText from '../components/RegularText'
import MainContainer from '../components/MainScreenContainer'
import Numpad from '../components/NumPad'
import { useNavigation } from '@react-navigation/native'
import TitleText from '../components/TitleText'
<<<<<<< HEAD:iwallet/src/screens/ConfirmPinScreen.jsx
=======
import { AsyncStorage } from 'react-native'; 
import UserContext from '../redux/UserContext'
>>>>>>> 8c076ffcbca1824b7cd711edd67a6191b6e5604a:project_source/src/screens/ConfirmPinScreen.jsx

// TODO finish implementing me with replacing the numbers with * and storing the pin
const ConfirmPinScreen = (props) => {
    const context = useContext(UserContext)
    const navigator = useNavigation()
    // will be setting up the users pin here
    const styles = StyleSheet.create({
        container: {
            margin: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
    const mustMatch = props.route.params.pin;
    const [numPin, setNumPin] = useState('')
    const [pinInput, setPinInput] = useState('####')

    useEffect(() => {
        if(pinInput.length == 4) {
            if(pinInput.indexOf('#') == -1) {
                onDone()
            }
        }
    }, [pinInput])

    const onNumpad = (num) => {
        if(num != -1) {
            if(num == -2) {
                let firstHashTag = pinInput.indexOf('#');
                if(firstHashTag != -1) {
                    if(firstHashTag == 1 || firstHashTag == 0) {
                        setPinInput('####')
                        setNumPin('')
                    } else {
                        let newPinString = pinInput.slice(0, firstHashTag - 1)
                        for(let i = 0; i <= (4 - firstHashTag); i++) {
                            newPinString = newPinString + '#'
                        } 
                        setPinInput(newPinString)
                    }
                } else {
                    let newPinString = pinInput.slice(0, 3) + '#'
                    setPinInput(newPinString)
                }                
            } else {
                if(props.openCheck) {
                    let newPinStr = pinInput.replace('#', '*')
                    setPinInput(newPinStr);
                    setNumPin(numPin + num.toString())
                } else {
                    let newPinStr = pinInput.replace('#', num.toString())
                    setPinInput(newPinStr);
                }
            }
        }
    }

    const onDone = () => {
        let pinToCheck = pinInput
        if(props.openCheck) {
            pinToCheck = numPin
        }
        if(mustMatch !== pinToCheck) {
            alert('Your pins do not match')
        } else {
<<<<<<< HEAD:iwallet/src/screens/ConfirmPinScreen.jsx
            navigator.navigate('Home')
=======
            // TODO set pin in storage
            AsyncStorage.setItem('pin', pinToCheck)
                .then(() => {
                    context.setPin(pinToCheck)
                    navigator.navigate('Home')
                })
                .catch(console.error)
            
>>>>>>> 8c076ffcbca1824b7cd711edd67a6191b6e5604a:project_source/src/screens/ConfirmPinScreen.jsx
        }
    }

    return (
        <MainContainer backBtn={true} topCenterChild={props.openCheck ? <TitleText text="Please Enter Your Pin"/>: <TitleText text="Please Confirm Your Pin"/>}>
            <RegularText text={pinInput} oppositeColor={false} style={{textAlign: 'center', fontSize: 50, margin: 50}}/>
            <Numpad onTap={onNumpad.bind(this)}/>
        </MainContainer>
    )
}

export default ConfirmPinScreen

