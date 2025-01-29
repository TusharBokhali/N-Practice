import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function Profile() {
  const isDark = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="menu" size={24} color={isDark ? 'white' : 'black'} />
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15
    }
})