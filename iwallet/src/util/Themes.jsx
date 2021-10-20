import * as React from 'react';

const DarkTheme = {
    colors: {
        primary: 'rgb(255, 134, 117)',
        background: 'rgb(35, 33, 37)',
        card: 'rgb(122, 115, 198)',
        text: 'rgb(255, 255, 255)',
        border: 'rgb(0, 0, 0)',
        notification: 'rgb(234, 16, 16)',
        buttonShadow: 'rgb(253, 137, 0)'
    }
};

const LightTheme = {
    colors: {
        primary: 'rgb(255, 134, 117)',
        background: 'rgb(231, 241, 244)',
        card: 'rgb(209, 239, 181)',
        text: 'rgb(0, 0, 0)',
        border: 'rgb(0, 0, 0)',
        notification: 'rgb(234, 16, 16)',
        buttonShadow: 'rgb(253, 137, 0)'
    }
};

const Themes = {dark: DarkTheme, light: LightTheme}

export default Themes