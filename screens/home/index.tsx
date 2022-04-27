import React from 'react'

import SendBox from './send-box'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FloatTabBarIcon, FloatTabBarIconWrapper, TabBarIconWrapperIcon } from './home.styles'
import Settings from './settings'

const Tab = createBottomTabNavigator() as any

function MyTabs () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#0C2239',
          left: 10,
          right: 10,
          bottom: 10,
          borderRadius: 50,
          height: 60
        }
      }}
    >
      <Tab.Screen
        name="SendBox"
        component={SendBox}
        options={{
          tabBarIcon: ({ focused } : any) => (
            <TabBarIconWrapperIcon
              source={require('../../assets/chat.png')}
              style={{ tintColor: focused ? '#4AD196' : '#fff' }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Share"
        component={Settings}
        options={{
          tabBarIcon: ({ focused } : any) => (
            <FloatTabBarIconWrapper>
              <FloatTabBarIcon
              source={require('../../assets/location.png')}
            />
            </FloatTabBarIconWrapper>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused } : any) => (
            <TabBarIconWrapperIcon
              source={require('../../assets/settings.png')}
              style={{ tintColor: focused ? '#4AD196' : '#fff' }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs
