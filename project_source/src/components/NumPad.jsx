import React, { useState } from 'react'
import { View, Text, AlertIOS, TouchableHighlight, StyleSheet} from 'react-native'
import RegularText from '../components/RegularText'
import PinButton from '../components/PinButton'
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@pavelgric/react-native-theme-provider';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    icon: {
      textAlign: 'center'
    }
  });

const Numpad = ({onTap}) => {
  const { t } = useTheme();

  return (
    <View style={styles.container}>
        <PinButton child={<RegularText text="1" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(1)}/>
        <PinButton child={<RegularText text="2" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(2)}/>
        <PinButton child={<RegularText text="3" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(3)}/>
        <PinButton child={<RegularText text="4" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(4)}/>
        <PinButton child={<RegularText text="5" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(5)}/>
        <PinButton child={<RegularText text="6" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(6)}/>
        <PinButton child={<RegularText text="7" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(7)}/>
        <PinButton child={<RegularText text="8" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(8)}/>
        <PinButton child={<RegularText text="9" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(9)}/>
        <PinButton child={<RegularText text="" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(-1)} style={{backgroundColor: 'transparent', shadowColor: 'transparent'}}/>
        <PinButton child={<RegularText text="0" oppositeColor={true} style={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(0)}/>
        <PinButton child={<Icon name="backspace-outline" size={48} color={t.colors.oppositeThemeText} style={styles.icon}/>} onTap={() => onTap(-2)}/>
    </View>
  );
};



export default Numpad;