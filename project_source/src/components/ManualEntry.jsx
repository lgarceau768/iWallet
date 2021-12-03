import React from 'react'
import { View, StyleSheet } from 'react-native'
import RegularText from '../components/RegularText'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { useTheme } from '@pavelgric/react-native-theme-provider';

function ManualEntry () {
    const { t } = useTheme();
    const styles = StyleSheet.create({
        container: {
            margin: 25,
            height: 300,
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

    const _onChange = (form) => console.log(form);
    const _onFocus = (field) => console.log("focusing", field);

    

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

                onFocus={_onFocus}
                onChange={_onChange} />
        </View>
    )
}


export default ManualEntry;