import React, { FC } from 'react'

import { ButtonProps } from './button.types'
import { Button as Container, Text } from './button.styles'

const Input: FC<ButtonProps> = ({ text, ...rest }) => (<Container {...rest}>
  <Text>{text}</Text>
</Container>)

export default Input
