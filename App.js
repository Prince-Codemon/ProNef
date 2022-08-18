import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import { StyleSheet, Text, View } from 'react-native';
import Details from './screens/Details';
import Home from './screens/Home';

const Stack = createStackNavigator()
const theme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:'transparent'
  }
}
export default function App() {
  const [loaded]= useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    
    
    

    
  })

  if(!loaded) return null
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//  Project page: https://expo.dev/@princek12/nftapp?serviceType=classic&distribution=expo-
// go Learn more: https://expo.fyi/project-page
