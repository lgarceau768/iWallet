import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native'; 

// Screen imports
import ThemeContainer from './src/components/ThemeContainer'
import IndexScreen from './src/screens/IndexScreen';
import HomeScreen from './src/screens/HomeScreen';
import CardDetailsScreen from './src/screens/CardDetails';
import CardTypeScreen from './src/screens/CardType';
import IntroScreen from './src/screens/IntroScreen';
import PinScreen from './src/screens/PinScreen';
import ConfirmPinScreen from './src/screens/ConfirmPinScreen';
<<<<<<< HEAD:iwallet/App.js
import ManualEntryScreen from './src/screens/ManualEntry';
=======
import { UserProvider } from './src/redux/UserProvider';
>>>>>>> 8c076ffcbca1824b7cd711edd67a6191b6e5604a:project_source/App.js



function App() {
  const Stack = createNativeStackNavigator();
  // state for ui holding tasks 
  const [loaded,setloaded] = useState(false);
  // check to see if the user has opened the app before
  let initialRoute = "Intro"; // Home
  let ConfirmPinOptions = {}
<<<<<<< HEAD:iwallet/App.js
 
=======

  const loadStuff = async () => {
    const fonts = Font.loadAsync({
      'Lato': require('./assets/fonts/Lato-Regular.ttf'),
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    });

    const checkPin = async () => {
      try {
        let pin = await AsyncStorage.getItem('pin')
        if(pin !== null) {
          initialRoute = 'ConfirmPin';
          ConfirmPinOptions = {pin}
        }
      } catch (error) {
        console.error(error)
      }
    }

    const promises = [];
    promises.push(fonts);
    promises.push(checkPin)

    return Promise.all(promises)
  }
>>>>>>> 8c076ffcbca1824b7cd711edd67a6191b6e5604a:project_source/App.js

  // Render iWallet App
  if(!loaded) {
    return (
      <AppLoading
        startAsync={loadStuff}
        onFinish={()=>{
          setloaded(true)
        }}
        onError={console.warn}
      />
    )
  }

  return (
    <UserProvider>
      <ThemeContainer>
          <NavigationContainer>
            <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}
              initialRouteName={initialRoute}>
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
                name="Intro"  
                component={IntroScreen}/>
              <Stack.Screen
                name="Pin"  
                component={PinScreen}
              />
              <Stack.Screen
                name="PinConfirm"  
                component={ConfirmPinScreen}
                options={ConfirmPinOptions}
              />
              <Stack.Screen
                name="ManualEntry"
                component={ManualEntryScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </ThemeContainer>
    </UserProvider>
  )
}




export default App
