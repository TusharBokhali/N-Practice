import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomNavigator from './BottomNavigator'

export default function Index() {
    return (
        <View style={styles.container}>
                <BottomNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Bottom:{
        width:'80%',
        marginHorizontal:'auto',
        backgroundColor:'#0bb90b',
        paddingVertical:10,
        borderRadius:10
    }
})