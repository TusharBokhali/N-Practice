import { createStaticNavigation, DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css"
import { useColorScheme } from '@/hooks/useColorScheme';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '@/screen/Index';
import Animation from './Animation';
import Animations from './Animations';
import ScrollAnimation from './ScrollAnimation';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const Stack = createStackNavigator();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName='ScrollAnimation' screenOptions={{headerShown:false,}} >
        <Stack.Screen name='Index' component={Index}/>
        <Stack.Screen name='Animations' component={Animations}/>
        <Stack.Screen name='ScrollAnimation' component={ScrollAnimation}/>
        <Stack.Screen name='Animation' component={Animation} options={{
          presentation:'transparentModal',
          animation:'fade_from_bottom'
        }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
