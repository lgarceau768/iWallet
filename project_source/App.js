import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage'

// Screen imports
import ThemeContainer from './src/components/ThemeContainer'
import IndexScreen from './src/screens/IndexScreen';
import HomeScreen from './src/screens/HomeScreen';
import CardDetailsScreen from './src/screens/CardDetails';
import CardTypeScreen from './src/screens/CardType';
import IntroScreen from './src/screens/IntroScreen';
import PinScreen from './src/screens/PinScreen';
import ConfirmPinScreen from './src/screens/ConfirmPinScreen';
import { UserProvider } from './src/redux/UserProvider';
import ManualEntryScreen from './src/screens/ManualEntryScreen';
import UserContext from './src/redux/UserContext';

function App() {
  const Stack = createNativeStackNavigator();
  // state for ui holding tasks 
  const [loaded,setloaded] = useState(false);
  const [cards, setCards] = useState([])
  const [pin, setPin] = useState('')
  // check to see if the user has opened the app before
  let initialRoute = ""; // Home
  let ConfirmPinOptions = {}

  const checkPin = async () => {
    try {
      let pinPulled = await AsyncStorage.getItem('pin')
      let cardsPulled = await AsyncStorage.getItem('cards')
      if(pinPulled !== null) {
        initialRoute = 'ConfirmPin';
        ConfirmPinOptions = {pin}
        setPin(pinPulled)
      }
      if(cardsPulled !== null){
        setCards(cardsPulled)
      }
    } catch (error) {
      initialRoute = 'Intro'
    }
  }

  const fonts = Font.loadAsync({
    'Lato': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
  });

  // Render iWallet App
  if(!loaded) {
    return (
      <AppLoading
        startAsync={Promise.all(fonts, checkPin)}
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
            <UserContext.Provider value={{
              pin: pin,
              cards: cards
            }}>
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
          </UserContext.Provider>
          
          </NavigationContainer>
      </ThemeContainer>
    </UserProvider>
  )
}




export default App
