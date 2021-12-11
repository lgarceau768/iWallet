import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import RegularText from '../components/RegularText'
import { CreditCardInput } from "../credit-card-input";
import { useTheme } from '@pavelgric/react-native-theme-provider';

function ManualEntry (props) {
    const { t } = useTheme();
    const styles = StyleSheet.create({
        container: {
            marginVertical: 25,
            height: '85%',
            // width: 300,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',

        },
        input: {
            color: t.oppositeColor ? t.colors.oppositeThemeText : t.colors.text
        },
        input2: {
            // fontSize: 60,
            color: t.oppositeColor ? t.colors.oppositeThemeText : t.colors.text
        }

    })

    const [errorText, setErrorText] = useState('')

    const _onChange = (form) => {
        if(form.valid) {
            props.onDone(form)
            setErrorText('')
        } else {
            for (const input in form.status) {
                if (Object.hasOwnProperty.call(form.status, input)) {
                    const status = form.status[input];
                    if(status == 'incomplete' || status == 'invalid') {
                        let statusError = input.charAt(0).toUpperCase() + input.substring(1, input.length) + ' is ' + status
                        setErrorText(statusError)
                        return
                    }
                }
            }
        }
    }


    // const styles = useStyle(styleCreator)
    return (
        <View style={styles.container}>
            <CreditCardInput
                // style={styles.container}
                autoFocus
                allowScroll={true}

                requiresName
                requiresCVC
                requiresPostalCode

                labelStyle={styles.input2}
                inputStyle={styles.input2}
                validColor={styles.input.color}
                invalidColor={"red"}
                // placeholderColor={themeCreator.lablel}
            
                onChange={_onChange} />
            <RegularText text={errorText} style={{marginBottom: 32, color: 'red', fontSize: 18}}/>
        </View>
    )
}


export default ManualEntry;