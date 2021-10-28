import React, { useState } from 'react'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button } from 'react-native'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider';
import RegularText from './RegularText';
import IButton from './Button';

const styleCreator = createStyle((t)=> ({
    dialogBox: {
        backgroundColor: t.colors.background
    }
}))

const IDialogBox = (props) => {
    const [visible, setVisible] = useState(true);
    const styles = useStyle(styleCreator)
    return (
        <Dialog style={styles.dialogBox}
            visible={visible}
            onTouchOutside={() =>{
                setVisible(false)
            }}
            >
            <DialogContent>
                <RegularText text="Are you sure you want to delete this card?"/>
                <IButton text="Yes" onTap={(props.parent.setState({visible: false}))}/>
                <IButton text="No" onTap={(props.parent.setState({visible: false}))}/>
            </DialogContent>
        </Dialog>
    )
}

export default IDialogBox