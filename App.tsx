import { useFonts } from 'expo-font'
import AppLoading from "expo-app-loading"
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'

import { StatusBar } from 'react-native'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <Routes />
    </>
  )
}
