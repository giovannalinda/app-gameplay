import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, SignIn } from '../screens'

export type NavigatorProps = {
  SignIn: undefined
  Home: undefined
}

const Stack: any = createNativeStackNavigator<NavigatorProps>()

export function AuthRoutes() {
  return (
    <Stack.Navigator 
      initialRouteName={SignIn}   
      screenOptions={{ 
        headerShown: false 
      }}  
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}