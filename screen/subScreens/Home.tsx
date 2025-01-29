import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainHome from './MainHome';
import Wishlist from './Wishlist';
import Cart from './Cart';
import Profile from './Profile';
import { AntDesign, Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';


export default function Home() {
    // const focused = useIsFocused();
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarButton: (props: any) => <TouchableOpacity {...props} activeOpacity={1} />,
            tabBarStyle: {
                position: 'absolute',
                height: 70,
                paddingTop: '4%',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'red',
            
        }}
            initialRouteName='Home'>
            <Tab.Screen name='Home' component={MainHome}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <MaterialIcons name="home" size={30} color={color} />
                        )
                    },
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen name='Wishlist' component={Wishlist}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <MaterialIcons name="favorite" size={24} color={color} />
                        )
                    },
                    tabBarBadge: 8,
                    tabBarBadgeStyle: {
                        width: 5,
                        height: 18,
                        borderRadius: 10,
                        fontSize: 10,
                        backgroundColor: 'blue'
                    }
                }}
            />
            <Tab.Screen name='Cart' component={Cart}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <MaterialIcons name="add-shopping-cart" size={size} color={color} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <MaterialIcons name="supervised-user-circle" size={size} color={color} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}