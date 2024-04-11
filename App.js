import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import HomePage from './components/HomePage'
import PlacePage from './components/PlacePage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecoilRoot } from "recoil";
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Place" component={PlacePage} />
          {/* <HomePage/> */}
          {/* <PlacePage/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  )
}

export default App

