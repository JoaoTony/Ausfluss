import React, { FC } from 'react'
import InputSearch from './search-input'
import { useNavigation, NavigationProp } from '@react-navigation/native'

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
import { RootStackParam } from '../../../types/root-stack.type'

type NavitaionStak = NavigationProp<RootStackParam, 'Home'>

const SendBox: FC = () => {
  const navigation: NavitaionStak = useNavigation()

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
        renderItem={(item) => <Applicant {...item.item} onPress={() => navigation.navigate('Chat', item.item)}/>}
      />

    </Container>
  )
}

export default SendBox
