import { StatusBar } from 'expo-status-bar'

import AppLoading from 'expo-app-loading'
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins'

import Router from './screens/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  )
}
