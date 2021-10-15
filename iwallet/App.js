/**
 * Contains the loading screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import Themes from './src/lib/Themes'
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Logo from './src/components/Logo';
import { Provider } from 'react-redux'
import UserReducer from './src/reducer/UserReducer';

// test

const App = () => {
  const userTheme = useColorScheme();
  return (
    <Provider store={UserReducer}>
      <NavigationContainer theme={Themes.DarkTheme}>

      </NavigationContainer>
    </Provider>
  );
};




export default App;
