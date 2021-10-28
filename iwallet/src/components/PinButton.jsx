import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider'
import React, { useState } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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