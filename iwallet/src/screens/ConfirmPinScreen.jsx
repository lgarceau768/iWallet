import React, { useEffect, useState } from 'react'
import { View, StyleSheet} from 'react-native'
import RegularText from '../components/RegularText'
import MainContainer from '../components/MainScreenContainer'
import Numpad from '../components/NumPad'
import { useNavigation } from '@react-navigation/native'
import TitleText from '../components/TitleText'

const ConfirmPinScreen = (props) => {
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
                let newPinStr = pinInput.replace('#', num.toString())
                setPinInput(newPinStr);
            }
        }
    }

    const onDone = () => {
        if(mustMatch !== pinInput) {
            alert('Your pins do not match')
        } else {
            navigator.navigate('Home')
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

