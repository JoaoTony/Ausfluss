/* eslint-disable no-undef */
import React, { FC, useEffect, useState } from 'react'
import Button from '../../../components/button'
import { Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthContext } from '../../../context/auth.context'

import {
  Container,
  Avatar,
  Title,
  UserInformationWrapper,
  UserInformationTitle,
  UserInformationText,
  ShowVehiclesButton,
  ShowVehiclesButtonText
} from './settings.styles'
import { getFetcher } from '../../../services/fetcher'
import { DriverInfo } from './settings.types'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width

const Settings: FC = () => {
  const { signOut } = useAuthContext()
  const [user, setUser] = useState<DriverInfo>()
  const navigation = useNavigation() as any

  const handleSignOu = async () => {
    await signOut()
  }

  const getDriverInfo = async () => {
    const authValue = await AsyncStorage.getItem('AusflussAuth')
    const { data } = await getFetcher<DriverInfo>(`/api/v1/drivers/${JSON.parse(authValue || '').id}`)

    if (data) {
      setUser(data)
    }
  }

  useEffect(() => {
    getDriverInfo()
  }, [])

  return (
    <Container>
      <Avatar source={require('../../../assets/avatar.jpg')} />
      <Title>{user?.name || 'carregando...'}</Title>

      <UserInformationWrapper>
        <UserInformationTitle>Nome</UserInformationTitle>
        <UserInformationText>{user?.name}</UserInformationText>

        <UserInformationTitle>Email</UserInformationTitle>
        <UserInformationText>{user?.email}</UserInformationText>

        <UserInformationTitle>N do BI</UserInformationTitle>
        <UserInformationText>{user?.num_BI}</UserInformationText>

        <UserInformationTitle>Carta de Condução</UserInformationTitle>
        <UserInformationText>{user?.driver_id}</UserInformationText>
      </UserInformationWrapper>

      <ShowVehiclesButton onPress={() => navigation.navigate('Vehicles')}>
        <ShowVehiclesButtonText>Ver lista de Veículos</ShowVehiclesButtonText>
      </ShowVehiclesButton>

      <Button
        width={(width - 32).toString()}
        onPress={() => handleSignOu()}
        text="Terminar Sessaão"
      />
    </Container>
  )
}

export default Settings
