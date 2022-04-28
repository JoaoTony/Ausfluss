import React, { FC } from 'react'

import { ButtonProps } from './button.types'
import { Button as Container, Text } from './button.styles'
import { ActivityIndicator } from 'react-native'

const Input: FC<ButtonProps> = ({ text, loading, ...rest }) => (
<Container {...rest}>
  {loading
    ? (
        <ActivityIndicator size={25} color="#fff"/>
      )
    : <Text>{text}</Text>}

</Container>)

export default Input
