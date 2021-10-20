import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function TouchableTextButton (text,funnction1){
    const App = () => {

        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={function1}
            >
              <Text>{text1}</Text>
            </TouchableOpacity>
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 10
        },
        button: {
          alignItems: 'center',
          backgroundColor: "#DDDDDD",
          padding: 10,
          top: "35%"
        },
        countContainer: {
          alignItems: "center",
          padding: 10
        }
      });
      
      export default App;
}
export default TouchableTextButton;
