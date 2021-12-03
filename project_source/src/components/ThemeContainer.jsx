import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@pavelgric/react-native-theme-provider';
import Themes from '../util/Themes';

const ThemeContainer = (props) => {
    const userTheme = useColorScheme()
    return (
        <ThemeProvider
            themes={Themes}
            initialTheme={userTheme}>
            {props.children}
        </ThemeProvider>
    )
}

export default ThemeContainer;