import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from '../components/RegularText'

const themeCreator = createStyle((currentTheme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: currentTheme.colors.card,
    borderRadius: 10,
    shadowColor: currentTheme.colors.buttonShadow,
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: currentTheme.colors.buttonShadowOpacity,
    padding: 10,
    top: "35%"
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  } 
}))

function TouchableTextButton ({text, onTap, enabled}) {
  const styles = useStyle(themeCreator)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if(enabled !== undefined) {
            if(enabled) {
              onTap()
            }
          } else {
            onTap()
          }
        }}
      >
        <RegularText text={text}/>
      </TouchableOpacity>
    </View>
  )     
}

export default TouchableTextButton;
