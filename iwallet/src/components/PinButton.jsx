import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View, Text, AlertIOS, TouchableHighlight} from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const themeCreator = createStyle((currentTheme) => ({
        circle: {
            margin: 10,
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: currentTheme.colors.pinButtonColor,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            shadowColor: currentTheme.colors.buttonShadow,
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: currentTheme.values.buttonShadowOpacity,
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