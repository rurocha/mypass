import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Register from './screens/Register';
import AuthenticationFailed from './screens/AuthenticationFailed/Index';


export default function AppRoutes() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="auth-failed" component={AuthenticationFailed} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}