import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './login';

const Stack = createNativeStackNavigator() as any;


const Router: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {() => <Login />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router; 