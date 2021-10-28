import { createStyle, useTheme, useThemeDispatch } from '@pavelgric/react-native-theme-provider'
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
import PinButton from '../components/PinButton'

const PinScreen = () => {

return (
    <MainContainer backBtn={true} topCenterChild={<RegularText text="Pin Screen"/>}>
        <RegularText text="Hello"/>
        <PinButton onTap={() => null} child={<RegularText text="1"/>}/>
        <PinButton onTap={() => null} child={<RegularText text="2"/>}/>
    </MainContainer>
)
}



// const PinScreen = (props) => {
//     PasscodeAuth.authenticate('to demo this react-native component')
//         .then(success => {
//             alert('Authenticated Successfully');
//         })
//         .catch(error => {
//             console.log(error)
//             alert('Authentication Failed');
//         });
//     return (
//         <View>
//             <TouchableOpacity onTap= (props) =></View>}></TouchableOpacity>
//         </View>
//     )
// }
// const PinScreen = () => {
//     PasscodeAuth.isSupported()
//   .then(supported => {
//     // Success code
//     console.log('Passcode Auth is supported.');
//   })
//   .catch(error => {
//     // Failure code
//     console.log(error);
//   });
//     _pressHandler = () => {
//       PasscodeAuth.authenticate('to demo this react-native component')
//         .then(success => {
//           alert('Authenticated Successfully');
//         })
//         .catch(error => {
//             console.log(error);
//           alert('Authentication Failed');
//         });
//     }
  
//     return (
//     <MainContainer backBtn={true} topCenterChild={<RegularText text="Please Enter a Pin"/>}>
//         <TouchableTextButton text="Authenticate" onTap={_pressHandler}/>
//     </MainContainer>
//     );
// }

export default PinScreen