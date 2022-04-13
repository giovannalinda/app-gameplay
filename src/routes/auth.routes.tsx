import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, SignIn } from '../screens'

const Stack: any = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}