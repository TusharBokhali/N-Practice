import { View, Text, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomNavigator from './BottomNavigator'
import { useNavigation } from '@react-navigation/native'
import Animated from 'react-native-reanimated'

export default function Index() {
    const {navigate} = useNavigation<any>();
    const [close,setClose] = useState(false);
    return (
        <View style={styles.container}>
                {/* <BottomNavigator /> */}
                <Pressable onPressIn={()=>{navigate('Animation');setClose(true)}}>
                    <Animated.Image 
                    sharedTransitionTag='shareTag'
                    source={require('../assets/images/Robot-Hand-PNG.jpg')}
                    style={[styles.Image,]}
                    />
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    Bottom:{
        width:'80%',
        marginHorizontal:'auto',
        backgroundColor:'#0bb90b',
        paddingVertical:10,
        borderRadius:10
    },
    Image:{
        width:'80%',
        height:200,
        marginHorizontal:'auto'
    }
})