
import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Wishlist from './subScreens/Wishlist';
import MainHome from './subScreens/MainHome';
import Cart from './subScreens/Cart';
import Profile from './subScreens/Profile';
import Home from './subScreens/Home';
import { AntDesign, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function BottomNavigator() {
  const isDark = useColorScheme() === 'dark';
  const Drawer = createDrawerNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <Drawer.Navigator initialRouteName='Home'  screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: isDark ? '#181C14' : 'white',
          width: '70%',
        },
        drawerHideStatusBarOnOpen:true,
        drawerStatusBarAnimation:'fade',
        
      }}
      >
        <Drawer.Screen name='Home' component={Home}
          options={{
            drawerIcon: ({ color, size, focused }) => {
              return (
                <MaterialIcons name="home" size={30} color={color} />
              )
            }
          }}
        />
        <Drawer.Screen name='Wishlist' component={Wishlist}
          options={{
            drawerIcon: ({ color, size, focused }) => {
              return (
                <MaterialIcons name="favorite" size={24} color={color} />

              )
            }
          }}
        />
        <Drawer.Screen name='Cart' component={Cart}
          options={{
            drawerIcon: ({ color, size, focused }) => {
              return (
                <MaterialIcons name="add-shopping-cart" size={size} color={color} />

              )
            }
          }}
        />
        <Drawer.Screen name='Profile' component={Profile}
          options={{
            drawerIcon: ({ color, size, focused }) => {
              return (
                <MaterialIcons name="supervised-user-circle" size={size} color={color} />

              )
            }
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  )
}