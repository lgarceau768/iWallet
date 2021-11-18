import * as React from 'react'
import { createStyle, useStyle } from '@pavelgric/react-native-theme-provider'
import { StyleSheet, View } from 'react-native'
import BackButton from './BackButton'

const styleCreator = createStyle((t) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignContent: 'flex-start',
        flex: '1',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 5,
        backgroundColor: t.colors.background,
    }
}))

const MainContainer = ({ backBtn, topCenterChild, topRightChild, children}) => {
    const styles = useStyle(styleCreator);
    let direction = 'flex-start'
    if(topCenterChild === undefined) {
        if(backBtn === false) {
            direction = 'flex-end'
        }
    }
    const moreStyles = StyleSheet.create({        
        topContainer: {
            paddingHorizontal: 10,
            paddingVertical: 15,
            minHeight: 40,
            maxHeight: 60,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: direction,
            alignContent: 'space-between',
        }
    })
    return (
        <View style={styles.mainContainer}>
            <View style={moreStyles.topContainer}>
                { backBtn ? 
                    <BackButton/>
                : <View></View>}
                { topCenterChild !== undefined ?
                    topCenterChild
                : <View></View>}
                { topRightChild !== undefined ? 
                    topRightChild
                : <View></View>}
            </View>
            {children}
        </View>
    )
}

export default MainContainer