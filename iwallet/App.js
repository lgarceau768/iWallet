import React, { useState } from 'react'
import Themes from './src/util/Themes'
import {
  Text,
  View,
} from 'react-native'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
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

// Setup User Data
const store = createStore(UserReducer)

// Get Fonts
const fetchFonts = () => {
  return Font.loadAsync({
  'Lato': require('./assets/fonts/Lato-Regular.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
  });
};

function App() {
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello</Text>
          <RegularText text="Hello"/>
          <IButton onTap={() => {
            const { selectedTheme, themes, t} = useTheme()
            const setTheme = useThemeDispatch()
            const nextTheme = selectedTheme === 'dark' ? 'light': 'dark'
            setTheme(nextTheme)
          }} text="Theme"/>
        </View>
      </ThemeContainer>
    </Provider>
  )
}




export default App
