import React, {useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components/native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading'
import * as LocalAuthentication from 'expo-local-authentication'
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

import theme from './src/global/styles/theme'
import AppRoutes from './src/routes';
import AuthenticationFailed from './src/screens/AuthenticationFailed/Index';

export default function App() {
// const {navigate} = useNavigation()

const [isAuthenticated, setIsAuthenticated] = useState(null)

  // useEffect(() => {
  //   async function loadAuth() {
  //   LocalAuthentication.authenticateAsync({
  //     promptMessage: 'Autenticação'
  //   })
  //   .then((res) => {
  //     setIsAuthenticated(res.success)
  //     // navigate('home')
  //   })
  //   .catch((err) => {
  //     // Alert('nao autenticado')
  //     // navigate('auth-failed')
  //   })
  // }
  //  loadAuth()
  // }, [])

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>   
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
