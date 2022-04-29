/* eslint-disable no-unused-vars */
import React, { FC, useState, useEffect } from 'react'
import InputSearch from './search-input'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { ActivityIndicator, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import useSWR from 'swr'

import {
  Container,
  Title,
  TitleLight,
  CustomHeader,
  HaderRow,
  Avatar,
  LoadingView
} from './send-box.styles'

import { sendBoxFakeData } from './send-box.fake-data'
import Applicant from '../../../components/applicant'
import { RootStackParam } from '../../../types/root-stack.type'
import { getFetcher } from '../../../services/fetcher'
import { ApplicantProps } from './send-box.types'
import { DriverInfo } from '../../../types/driver.type'

type NavitaionStak = NavigationProp<RootStackParam, 'Home'>

const SendBox: FC = () => {
  const navigation: NavitaionStak = useNavigation()
  // const [data, setData] = useState<ApplicantProps[]>()
  const [user, setUser] = useState<DriverInfo>()

  const getDriverInfo = async () => {
    const authValue = await AsyncStorage.getItem('AusflussAuth')
    const { data } = await getFetcher<DriverInfo>(`/api/v1/drivers/${JSON.parse(authValue || '').id}`)

    if (data) {
      setUser(data)
    }
  }

  const { data, error } = useSWR('/api/v1/messages/mailbox')

  useEffect(() => {
    getDriverInfo()
  }, [])

  return (
    <Container>
      <CustomHeader>
        <HaderRow>
          <HaderRow>
            <TitleLight>Olá, </TitleLight>
            <Title>{user ? user.name.split(' ')[0] : 'carregando...'}</Title>
          </HaderRow>
        </HaderRow>

        <Avatar source={require('../../../assets/avatar.jpg')} />
      </CustomHeader>

      <InputSearch placeholder="Pesquisar por solicitações" />

      {data && (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={(item) => <Applicant {...item.item} onPress={() => navigation.navigate('Chat', item.item)}/>}
        />
      )}

      {!data && !error && (
        <LoadingView>
          <ActivityIndicator size={60} color="#4AD196"/>
        </LoadingView>
      )}

    </Container>
  )
}

export default SendBox
