import { createStyle, useStyle, useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, AlertIOS, TouchableHighlight} from 'react-native'
import IButton from '../components/Button'
import RegularText from '../components/RegularText'
import Logo from '../components/Logo'
import PasscodeAuth from 'react-native-passcode-auth';
import MainContainer from '../components/MainScreenContainer'
import TouchableTextButton from '../components/TouchableTextButton'
import { FloatingAction } from "react-native-floating-action";
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Circle } from 'react-native-svg'
import Themes from '../util/Themes'

const themeCreator = createStyle((currentTheme) => ({
        circle: {
            margin: 10,
            height: 85,
            width: 85,
            borderRadius: 50,
            backgroundColor: currentTheme.colors.pinButtonColor,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        },
  }))
  
  function PinButton ({onTap, child}) {
    const styles = useStyle(themeCreator)
    return (
      <View>
        <TouchableOpacity
          onPress={onTap}
          >
              <View style={styles.circle}>
                  {child}
              </View>
        </TouchableOpacity>
      </View>
    )     
  }

  export default PinButton;