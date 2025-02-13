// import { View, Text, TouchableOpacity, LayoutChangeEvent, StyleSheet } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import Animated, { useAnimatedStyle, useSharedValue, withDecay, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
// import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';

// const SIZE = 120;
// const BOUNDARY_OFFSET = 50;

// export default function Animation() {
//   const AnimationSharedValue = useSharedValue(-500);
//   const offset = useSharedValue<number>(0);
//   const width = useSharedValue<number>(0);
//   const [space, setSpace] = useState(true)

//   useEffect(() => {
//     setTimeout(() => {
//       AnimationSharedValue.value = -300 ? 100  : -300;
//     }, 400);
//   }, [])
//   // const AnimatedStyle = useAnimatedStyle(()=>{
//   //   return {
//   //     transform:[ {translateY:withRepeat(
//   //       withSpring(AnimationSharedValue.value,{damping:5,stiffness:20}),
//   //       0,
//   //       true  
//   //     )} ]
//   //   }
//   // })
//   // const onLayout = (event: LayoutChangeEvent) => {
//   //   width.value = event.nativeEvent.layout.width;
//   // };

//   // const pan = Gesture.Pan()
//   //   .onChange((event) => {
//   //     offset.value += event.changeX;
//   //   })
//   //   .onFinalize((event) => {
//   //     offset.value = withDecay({
//   //       velocity: event.velocityY,
//   //       rubberBandEffect: true,
//   //       clamp: [
//   //         -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
//   //         width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
//   //       ],
//   //     });
//   //   });
//   const AnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{
//         translateY: withTiming(AnimationSharedValue.value,
//           {
//             duration: 1500,
//           }
//         )
//       }
//       ]
//     }
//   })

//   const animatedStyles = useAnimatedStyle(() => ({
//     transform: [{ translateY: offset.value }],
//   }));
//   return (
//     <SafeAreaView style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>

//       <Animated.View style={[{
//         width: 150,
//         height: 150,
//         backgroundColor: 'red',
//         borderRadius: 10
//       }, AnimatedStyle]} />

//       <TouchableOpacity style={{ width: '80%', marginHorizontal: 'auto', backgroundColor: 'red', borderRadius: 7, marginTop: 10 }}>
//         <Text style={{ color: 'white', paddingVertical: 10, textAlign: 'center' }}>Click Me</Text>
//       </TouchableOpacity>
// {/* <GestureHandlerRootView style={styles.container}>
//       <View onLayout={onLayout} style={styles.wrapper}>
//         <GestureDetector gesture={pan}>
//           <Animated.View style={[styles.box, animatedStyles]} />
//         </GestureDetector>
//       </View>
//     </GestureHandlerRootView> */}
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//   },
//   wrapper: {
//     flex: 1,
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     height: SIZE,
//     width: SIZE,
//     backgroundColor: '#6500fc',
//     borderRadius: 20,
//     cursor: 'grab',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import Animated, { FadeInLeft } from 'react-native-reanimated';

export default function Animation() {
  const { goBack } = useNavigation<any>();

  return (
    <BlurView intensity={100} style={styles.container} tint='dark'>
      <Pressable onPressIn={() => goBack()}>
        <Animated.Image
          sharedTransitionTag='shareTag'
          source={{uri:'https://cdn.pixabay.com/photo/2025/02/08/03/07/flower-9391281_640.jpg'}}
          style={styles.Image}
        />
        <Animated.Text style={styles.TXT} entering={FadeInLeft.delay(500).duration(400)}>React Native SharedElement Animation</Animated.Text>
        <Animated.View entering={FadeInLeft.delay(500).duration(400)}>
          <Text style={styles.model} >React Native SharedElement Animation</Text>
        </Animated.View>
      </Pressable>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:15
  },
  Image: {
    width: '80%',
    height: 300,
    marginHorizontal: 'auto'
  },
  TXT: {
    fontSize: 28,
    fontWeight: '600'
  },
  model: {
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: 'auto',
    padding: 10,
    height: 150,
    borderRadius: 10,
    marginTop: 50
  }
})