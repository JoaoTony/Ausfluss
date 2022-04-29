/* eslint-disable no-undef */
import { StatusBar } from 'expo-status-bar'
import { Suspense } from 'react'
import { SWRConfig } from 'swr'
import AppLoading from 'expo-app-loading'
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Router from './routes'
import { AuthProvider } from './context/auth.context'

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const getToken = async () => {
    const authValue = await AsyncStorage.getItem('AusflussAuth')

    const tooken = JSON.parse(authValue || '').token as string

    return tooken
  }

  return (
    <SWRConfig
    value={{
      fetcher: async (url: string) => fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getToken()}`
        }
      }).then(res => res.json()),
      suspense: true,
      shouldRetryOnError: true,
      refreshInterval: 1000,
      refreshWhenOffline: true,
      errorRetryInterval: 1000,
      errorRetryCount: 5
    }}
    >
      <Suspense fallback>
        <AuthProvider>
          <Router />
          <StatusBar style="auto" />
        </AuthProvider>
      </Suspense>
    </SWRConfig>
  )
}

export default App
