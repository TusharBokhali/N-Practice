import { View, Text, ScrollView, StyleSheet, Image, Dimensions, FlatList, Animated, SafeAreaView, } from 'react-native'
import React, { useRef } from 'react'
import { user } from '@/UserChat';
import { StatusBar } from 'expo-status-bar';

export default function ScrollAnimation() {
    const scrollY = useRef(new Animated.Value(0)).current;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const ITEM_SIZE  = width * 0.18 + 20 * 3;
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar hidden={true} />
            <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg' }}
                style={StyleSheet.absoluteFillObject}
                blurRadius={80}
            />
            <Animated.FlatList
                data={user}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={({ item, index }: any) => index}
                renderItem={({ item, index }: any) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]

                    const opaciyRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange:[1,1,1,0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange:opaciyRange,
                        outputRange:[1,1,1,0]
                    })
                    return (
                        <Animated.View key={index} style={[styles.Main,{transform:[{scale}],opacity}]}>
                            <View style={{ width: '20%' }}>
                                <Image
                                    source={item?.user_avatar}
                                    className='w-24 h-24 rounded-full'
                                />
                            </View>
                            <View style={{ width: '70%', }}>
                                <Text style={{
                                    fontSize: 16,
                                }}>{item?.description.length > 20 ? `${item.description.slice(0, 30) + '...'} ` : item.description}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: '600'
                                }}>{item?.userName}</Text>
                            </View>
                        </Animated.View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Main: {
        margin: 20,
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 7,
        shadowColor: '#000',
        elevation: 20,
        justifyContent: 'space-between'
        // shadowOpacity:

    }
})