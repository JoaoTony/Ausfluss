/* eslint-disable no-undef */
import { Alert } from 'react-native'
import { Auth } from '../types/auth.type'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const signInService = async (email: string, password: string): Promise<Auth> => {
  const data = { token: '', id: '' }
  const backEndIP = await AsyncStorage.getItem('backEndIP')

  try {
    const response = await fetch(`http://${backEndIP}:8080/api/v1/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password, type: 'driver' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      const res = await response.json()
      data.token = res.access_token
      data.id = res.id
    } else {
      Alert.alert('Erro', 'Erro abaixo de 500')
    }
  } catch (error) {
    Alert.alert('Erro', 'Erro no catch')
  }

  return data
}
