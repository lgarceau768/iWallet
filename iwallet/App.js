/**
 * Contains the loading screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react'
import Themes from './src/util/Themes'
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Logo from './src/components/Logo';
import IndexScreen from './src/screens/IntroScreen/IndexScreen';



function App() {
  const userTheme = useColorScheme()
  return (
    <NavigationContainer theme={Themes.DarkTheme}>
      <IndexScreen name="Luke"/>
    </NavigationContainer>
  );
};




export default App;
