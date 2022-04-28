import React, { FC } from 'react'

import { ApplicantsProps } from './applicant.types'
import { Conatiner, View, Avatar, Name, Message } from './applicant.styles'

const img = 'http://192.168.0.105:9000/profile-generic.png'

const Applicant: FC<ApplicantsProps> = ({ photo_url, name, message, id, ...rest }) => (
  <Conatiner {...rest}>
    <Avatar source={{ uri: img }} />
    <View>
      <Name numberOfLines={1}>{name}</Name>
      <Message numberOfLines={1}>{message}</Message>
    </View>
  </Conatiner>
)

export default Applicant
