import React, { useState } from 'react'
import RegularText from '../components/RegularText'
import MainContainer from '../components/MainScreenContainer'
import PinButton from '../components/PinButton'

const PinScreen = () => {

return (
    <MainContainer backBtn={true} topCenterChild={<RegularText text="Pin Screen"/>}>
        <RegularText text="Hello"/>
        <PinButton onTap={() => null} child={<RegularText 
            text="1" 
            oppositeColor={true}
            extraStyle={{ textAlign: 'center'}}/>}/>
        <PinButton onTap={() => null} child={<RegularText 
            text="2" 
            oppositeColor={true}
            extraStyle={{ textAlign: 'center'}}/>}/>
    </MainContainer>
)
}


export default PinScreen
