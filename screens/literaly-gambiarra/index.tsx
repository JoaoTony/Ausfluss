import React, { FC, useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Container } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Dimensions } from 'react-native'

import Button from '../../components/button'
import Input from '../../components/input'
const width = Dimensions.get('screen').width

const GAMBIARRA: FC = () => {
  const [backEndIp, setBackEndIp] = useState('')
  // const [loading, setLoading] = useState(false)

  const navigation = useNavigation() as any

  const handleBargain = () => {
    if (backEndIp) {
      AsyncStorage.setItem('backEndIP', backEndIp)
      navigation.navigate('Login')
    }
  }

  return (
    <Container>
      <Input
        placeholder="Introduza o IP"
        width={(width - 32).toString()}
        style={{ marginBottom: 10 }}
        onChangeText={(e) => setBackEndIp(e)}
      />

      <Button
        width={(width - 32).toString()}
        onPress={() => handleBargain()}
        text="Validar"
        loading={false}
      />
    </Container>
  )
}

export default GAMBIARRA
