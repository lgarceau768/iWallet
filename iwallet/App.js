import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

// Our Stuff
import UserReducer from './src/reducer/UserReducer'

// Screen imports
import ThemeContainer from './src/components/ThemeContainer'
import IndexScreen from './src/screens/IndexScreen';
import HomeScreen from './src/screens/HomeScreen';
import CardDetailsScreen from './src/screens/CardDetails';
import CardTypeScreen from './src/screens/CardType';
import BackButton from './src/components/BackButton';
import IntroScreen from './src/screens/IntroScreen';
import PinScreen from './src/screens/PinScreen';
import ConfirmPinScreen from './src/screens/ConfirmPinScreen';
import ManualEntryScreen from './src/screens/ManualEntry';

// Setup User Data
const store = createStore(UserReducer)


function App() {
  const Stack = createNativeStackNavigator();
  const fetchFonts = () => {
    return Font.loadAsync({
    'Lato': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    });
  };
  // state for ui holding tasks 
  const [fontloaded,setfontloaded] = useState(false);
  const [storageLoaded,setStorageLoaded] = useState(false);

  // check to see if the user has opened the app before
  let initialRoute = "Intro"; // Home
  
  let ConfirmPinOptions = {}
 

  // Render iWallet App
  if(!fontloaded || !storageLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>{
          setfontloaded(true)
        }}
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
    </Provider>
  )
}




export default App
