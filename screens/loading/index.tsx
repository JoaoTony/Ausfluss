import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native'

import { Container } from './loading.styles'

const Loader: FC = () => (
  <Container>
    <ActivityIndicator size={60} color="#4AD196"/>
  </Container>
)

export default Loader
