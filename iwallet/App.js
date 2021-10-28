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
import IndexScreen from './src/screens/IndexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CardDetailsScreen from './src/screens/CardDetails';
import CardTypeScreen from './src/screens/CardType';
import BackButton from './src/components/BackButton';
import PinScreen from './src/screens/PinScreen';

// Setup User Data
const store = createStore(UserReducer)

// set navigation

function App() {
  const Stack = createNativeStackNavigator();
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
          <NavigationContainer>
            <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen 
                name="Home"  
                component={HomeScreen}
              />
              <Stack.Screen 
                name="CardDetails" 
                component={CardDetailsScreen}
              />
              <Stack.Screen 
                name="CardType"  
                component={CardTypeScreen}
              />
              <Stack.Screen 
                name="Test"  
                component={IndexScreen}
              />
              <Stack.Screen 
                name="Pin"  
                component={PinScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </ThemeContainer>
    </Provider>
  )
}




export default App
