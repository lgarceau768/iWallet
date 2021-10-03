/**
 * Contains the loading screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { LightTheme, DarkTheme } from './src/lib/Themes'
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'



const App = () => {
  const userTheme = useColorScheme();
  return (
    <NavigationContainer theme={userTheme === 'dark' ? DarkTheme : LightTheme}>
      
    </NavigationContainer>
  );
};




export default App;
