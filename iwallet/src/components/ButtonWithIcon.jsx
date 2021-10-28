// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
// import RegularText from '../components/RegularText'

// const themeCreator = createStyle((currentTheme) => ({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 10
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: currentTheme.colors.card,
//     borderRadius: 10,
//     shadowColor: currentTheme.colors.buttonShadow,
//     shadowOffset: {width: 2, height: 4},
//     shadowOpacity: 0.2,
//     padding: 10,
//     top: "35%"
//   },
//   countContainer: {
//     alignItems: "center",
//     padding: 10
//   } 
// }))

// function ButtonWithIcon ({text, onTap}) {
//   const styles = useStyle(themeCreator)
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={onTap}
//       >
//         <RegularText text={text}/>
//       </TouchableOpacity>
//     </View>
//   )     
// }

// function App() {
//     const buttonClickedHandler = () => {
//       console.log('You have been clicked a button!');
//       // do something
//     };
  
//     return (
//       <View style={styles.screen}>
//         <TouchableOpacity
//           onPress={buttonClickedHandler}
//           style={styles.roundButton1}>
//           <Text>I'm a button</Text>
//         </TouchableOpacity>
  
//         {/* <TouchableOpacity
//           onPress={buttonClickedHandler}
//           style={styles.roundButton2}>
//           <Text>I'm another button</Text>
//         </TouchableOpacity> */}
//       </View>
//     );
//   }
  
//   export default App;
  
//   /// Just some styles
// //   const styles = StyleSheet.create({
//     // screen: {
//     //   flex: 1,
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     // },
//     // roundButton1: {
//     //   width: 100,
//     //   height: 100,
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   padding: 10,
//     //   borderRadius: 100,
//     //   backgroundColor: 'orange',
//     // },
//     // roundButton2: {
//     //   marginTop: 20,
//     //   width: 150,
//     //   height: 150,
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   padding: 10,
//     //   borderRadius: 100,
//     //   backgroundColor: '#ccc',
//     // },
// //   });



// export default ButtonWithIcon;