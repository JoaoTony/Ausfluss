import React, { FC } from 'react'

import { ApplicantsProps } from './applicant.types'
import { Conatiner, View, Avatar, Name, Message } from './applicant.styles'

const Applicant: FC<ApplicantsProps> = ({ avatar, name, message, time, ...rest }) => (
  <Conatiner {...rest}>
    <Avatar source={avatar} />
    <View>
      <Name numberOfLines={1}>{name}</Name>
      <Message numberOfLines={1}>{message}</Message>
    </View>
  </Conatiner>
)

export default Applicant
