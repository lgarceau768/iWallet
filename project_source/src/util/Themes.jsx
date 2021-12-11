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
        pinButtonColor: 'rgb(202, 222, 222)',
        oppositeThemeText: 'rgb(0, 0, 0)',
        lockedColor: 'black'
    },
    values: {        
        buttonShadowOpacity: 0.3,
    },
    shared: {
        greenColor: ''
    }
};

const LightTheme = {
    colors: {
        primary: 'rgb(255, 134, 117)',
        background: 'rgb(231, 241, 244)',
        card: 'rgb(255, 92, 0)',
        text: 'rgb(0, 0, 0)',
        border: 'rgb(0, 0, 0)',
        oppositeThemeText: 'rgb(255, 255, 255)',
        notification: 'rgb(234, 16, 16)',
        buttonShadow: 'rgb(122, 115, 198)',
        pinButtonColor: 'rgb(40, 43, 40)',
        lockedColor: 'black'
    },
    values: {        
        buttonShadowOpacity: 0.4,
    },
    shared: {
        greenColor: ''
    }
};

const Themes = {dark: DarkTheme, light: LightTheme}

export default Themes