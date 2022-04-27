import React, { FC } from 'react'
import Button from '../../../components/button'
import { Dimensions } from 'react-native'

import { useAuthContext } from '../../../context/auth.context'

import {
  Container,
  Avatar,
  Title,
  UserInformationWrapper,
  UserInformationTitle,
  UserInformationText
} from './settings.styles'

const width = Dimensions.get('screen').width

const Settings: FC = () => {
  const { signOut } = useAuthContext()

  const handleSignOu = async () => {
    await signOut()
  }

  return (
    <Container>
      <Avatar source={require('../../../assets/avatar.jpg')} />
      <Title>Bartolomeu Kuma</Title>

      <UserInformationWrapper>
        <UserInformationTitle>Nome</UserInformationTitle>
        <UserInformationText>Bartolomeu Kuma</UserInformationText>

        <UserInformationTitle>Telefone</UserInformationTitle>
        <UserInformationText>999 999 999</UserInformationText>

        <UserInformationTitle>N do BI</UserInformationTitle>
        <UserInformationText>Lda21892938924KZ</UserInformationText>

        <UserInformationTitle>Carta de Condução</UserInformationTitle>
        <UserInformationText>45sdhk855344</UserInformationText>
      </UserInformationWrapper>

      <Button
        width={(width - 32).toString()}
        onPress={() => handleSignOu()}
        text="Terminar Sessaão"
      />
    </Container>
  )
}

export default Settings
