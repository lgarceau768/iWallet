import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import localStorage from 'react-native-sync-localstorage'

// Our Stuff
import Logo from './src/components/Logo'
import UserReducer from './src/reducer/UserReducer'

// Testing imports
import ThemeContainer from './src/components/ThemeContainer'
import IndexScreen from './src/screens/IndexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CardDetailsScreen from './src/screens/CardDetails';
import CardTypeScreen from './src/screens/CardType';
import BackButton from './src/components/BackButton';
import IntroScreen from './src/screens/IntroScreen';

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
  

  // setup storage
  localStorage.getAllFromLocalStorage()
    .then(() => {
      setStorageLoaded(true)
      // now check to see which route to serve the app
      if(!localStorage.getItem('opened')) {
        initialRoute = 'Home';
      } else {
        initialRoute = 'Intro';
        localStorage.set('opened', true)
      }
    })
    .catch(err => {
      alert('Error reading storage.')
      console.log(err)
    })

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
              initialRouteName= "Home">
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
                component={IntroScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </ThemeContainer>
    </Provider>
  )
}




export default App
