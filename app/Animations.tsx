import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { transform } from '@babel/core';

export default function Animations() {
  const animation = useRef(new Animated.Value(0)).current;
  const [click, setClick] = useState(false);
  const toggle = () => {
    Animated.spring(animation, {
      toValue: click ? 0 : 1,
      friction: 5,
      useNativeDriver: true
    }).start();
    setClick(!click)
  }

  const third = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140]
        })
      }
    ]
  }

  const four = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -200]
        })
      }
    ]
  }

  const second = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80]
        })
      }
    ]
  }

const rotate = {
  transform: [
    {
      rotate: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
      })
    }
  ]
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Main}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.BTN, styles.fourth,four]}>
            <AntDesign name='hearto' size={24} color='#F02AFB' />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.BTN, styles.third,third]}>
            <Entypo name='location-pin' size={24} color='#F02AFB' />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.BTN, styles.Second,second]}>
            <Entypo name='thumbs-up' size={24} color='#F02AFB' />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => toggle()}>
          <Animated.View style={[styles.BTN, styles.Primary,rotate]}>
            <AntDesign name='plus' size={24} color='white'/>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  Main: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    
  },
  Primary: {
    width: 60,
    height: 60,
    backgroundColor: '#F02AFB',

  },
  BTN: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F02AFB',
    shadowRadius: 200,
    shadowOffset: { width: 0, height: 10 },
    elevation: 1,
    position: 'absolute'
  },
  Second: {
    width: 50,
    height: 50,
    position: 'absolute'
  },
  third: {
    width: 50,
    height: 50,
    position: 'absolute'
  },
  fourth: {
    width: 50,
    height: 50,
    position: 'absolute'
  }
})