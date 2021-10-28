import * as React from 'react';

const DarkTheme = {
    colors: {
        primary: 'rgb(255, 134, 117)',
        background: 'rgb(35, 33, 37)',
        card: 'rgb(122, 115, 198)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(0, 0, 0)',
        notification: 'rgb(234, 16, 16)',
        buttonShadow: 'rgb(253, 137, 0)',
<<<<<<< HEAD
        pinButtonColor: 'rgb(202, 222, 222)'
=======
    },
    values: {        
        buttonShadowOpacity: 0.3,
>>>>>>> 9a799353e1c1c3ba008f76d580b55aea1779b140
    }
};

const LightTheme = {
    colors: {
        primary: 'rgb(255, 134, 117)',
        background: 'rgb(231, 241, 244)',
        card: 'rgb(255, 92, 0)',
        text: 'rgb(0, 0, 0)',
        border: 'rgb(0, 0, 0)',
        notification: 'rgb(234, 16, 16)',
        buttonShadow: 'rgb(122, 115, 198)',
<<<<<<< HEAD
        pinButtonColor: 'rgb(40, 43, 40)'
=======
    },
    values: {        
        buttonShadowOpacity: 0.4,
>>>>>>> 9a799353e1c1c3ba008f76d580b55aea1779b140
    }
};

const Themes = {dark: DarkTheme, light: LightTheme}

export default Themes