import React, { useState } from 'react'
import Themes from './src/util/Themes'
import {
  Text,
  View,
} from 'react-native'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux'

// Our Stuff
import Logo from './src/components/Logo'
import UserReducer from './src/reducer/UserReducer'

// Testing imports
import IButton from './src/components/Button'
import ThemeContainer from './src/components/ThemeContainer'
import RegularText from './src/components/RegularText'
import { useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import { createStore } from 'redux'
import IndexScreen from './src/screens/IntroScreen/IndexScreen';

// Setup User Data
const store = createStore(UserReducer)

// Get Fonts


function App() {
  const fetchFonts = () => {
    return Font.loadAsync({
    'Lato': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    });
  };
  // state font fetch control 
    const [fontloaded,setfontloaded] = useState(false);
  // Render iWallet App
  if(!fontloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>{setfontloaded(true)}}
        onError={console.warn}
      />
    )
  }
  return (
    <Provider store={store}>
      <ThemeContainer>
        <View>
          <IndexScreen/>
        </View>
      </ThemeContainer>
    </Provider>
  )
}




export default App
