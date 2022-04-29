import React, { FC } from 'react'

import { Container, Text } from './message.styles'
import { MessageProps } from './message.types'

const Message: FC<MessageProps> = ({ owner, message }) => (
  <Container amITheOwner={owner === 'driver'}>
    <Text>{message}</Text>
  </Container>
)

export default Message
