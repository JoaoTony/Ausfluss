import React, { FC } from 'react'
import InputSearch from './search-input'

import { FlatList } from 'react-native'

import {
  Container,
  Title,
  TitleLight,
  CustomHeader,
  HaderRow,
  Avatar
} from './send-box.styles'

import { sendBoxFakeData } from './send-box.fake-data'
import Applicant from '../../../components/applicant'

const SendBox: FC = () => {
  return (
    <Container>
      <CustomHeader>
        <HaderRow>
          <HaderRow>
            <TitleLight>Olá, </TitleLight>
            <Title>Bartolomeu</Title>
          </HaderRow>
        </HaderRow>

        <Avatar source={require('../../../assets/avatar.jpg')} />
      </CustomHeader>

      <InputSearch placeholder="Pesquisar por solicitações" />

      <FlatList
        data={sendBoxFakeData}
        keyExtractor={({ id }) => id}
        renderItem={(item) => <Applicant {...item.item}/>}
      />

    </Container>
  )
}

export default SendBox
