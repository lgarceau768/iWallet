import React, { useState } from 'react'
import { View, Text, AlertIOS, TouchableHighlight, StyleSheet} from 'react-native'
import RegularText from '../components/RegularText'
import PinButton from '../components/PinButton'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  });

const Numpad = ({onTap}) => {

  return (
    <View style={styles.container}>
        <PinButton child={<RegularText text="1" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(1)}/>
        <PinButton child={<RegularText text="2" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(2)}/>
        <PinButton child={<RegularText text="3" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(3)}/>
        <PinButton child={<RegularText text="4" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(4)}/>
        <PinButton child={<RegularText text="5" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(5)}/>
        <PinButton child={<RegularText text="6" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(6)}/>
        <PinButton child={<RegularText text="7" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(7)}/>
        <PinButton child={<RegularText text="8" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(8)}/>
        <PinButton child={<RegularText text="9" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(9)}/>
        <PinButton child={<RegularText text="" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap()}/>
        <PinButton child={<RegularText text="0" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 30}}/>} onTap={() => onTap(0)}/>
        <PinButton child={<RegularText text="Delete" oppositeColor={true} extraStyle={{textAlign: 'center', fontSize: 20}}/>} onTap={() => onTap(Delete)}/>
    </View>
  );
};



export default Numpad;