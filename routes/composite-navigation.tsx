import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabNavigation from './bottom-tab-navigation'
import Chat from '../screens/chat'
import Vehicles from '../screens/home/vehicles'

const Stack = createNativeStackNavigator() as any

const CompositeNavigation: FC = () => (
  <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
    <Stack.Screen
      name="Home"
      component={BottomTabNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="Vehicles"
      component={Vehicles}
      options={{ headerShown: false }}
    />

  </Stack.Navigator>
)

export default CompositeNavigation
