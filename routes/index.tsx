import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigation from './stack-navigation'

import CompositeNavigation from './composite-navigation'

import { useAuthContext } from '../context/auth.context'
import Loader from '../screens/loading'

const Router: FC = () => {
  const { auth, loading } = useAuthContext()

  if (loading) {
    return <Loader />
  }

  return (
    <NavigationContainer>
      {auth?.token ? <CompositeNavigation /> : <StackNavigation/>}
    </NavigationContainer>
  )
}

export default Router
