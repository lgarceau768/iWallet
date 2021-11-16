import React from 'react'
import { View, StyleSheet } from 'react-native'
import RegularText from '../components/RegularText'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { useTheme } from '@pavelgric/react-native-theme-provider';

function ManualEntry () {
    const styles = StyleSheet.create({
        // label: {
        //     color: styles.colors.oppositeThemeText
        // },
        // input: {
        //     color: styles.colors.oppositeThemeText
        // },
        container: {
            // backgroundColor: styles.colors.background,
            margin: 25,
            height: 300,
            // width: 300,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',

        }

    })

    const _onChange = (form) => console.log(form);
    const _onFocus = (field) => console.log("focusing", field);

    const { t } = useTheme();

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

                // labelStyle={themeCreator.label}
                // inputStyle={themeCreator.input}
                validColor={"black"}
                invalidColor={"red"}
                // placeholderColor={themeCreator.lablel}

                onFocus={_onFocus}
                onChange={_onChange} />
        </View>
    )
}


export default ManualEntry;