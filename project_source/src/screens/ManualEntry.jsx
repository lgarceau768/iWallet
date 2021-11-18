import React from 'react'
import { View } from 'react-native'
import RegularText from '../components/RegularText'
import ManualEntry from '../components/ManualEntry'

const ManualEntryScreen = (props) => {


    return (
        <View>
            <RegularText text="ManualEntryScreen"/>
            <ManualEntry />
        </View>
    )
}

export default ManualEntryScreen