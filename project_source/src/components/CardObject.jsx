import React from 'react';
import gradient from 'random-gradient'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';

const CardObject = ({
    fullname, logoImage, number, chip, locked, tap, id
}) => {
    const themedStyle = createStyle((t) => ({
        container: {
            width: '90%',
            height: 160,
            background: gradient(id),
            borderRadius: 15,
            borderWidth: 1,
            borderColor: t.colors.text,
            justifyContent: 'flex-start'
        }
    }))
}

export default CardObject;