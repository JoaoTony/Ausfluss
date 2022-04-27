import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/login'
import SignUp from '../screens/sign-up'
import Chat from '../screens/chat'

const Stack = createNativeStackNavigator() as any

const StackNavigation: FC = () => (
  <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export default StackNavigation
