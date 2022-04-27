/* eslint-disable no-undef */
import { Alert } from 'react-native'
import { Auth } from '../types/auth.type'

export const signInService = async (email: string, password: string): Promise<Auth> => {
  const data = { token: '', email: '', name: '' }

  try {
    const response = await fetch('http://192.168.0.105:8080/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, type: 'driver' }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      console.log('201: ', response)
      const res = await response.json()
      data.token = res.access_token
    } else {
      console.log('N 201: ', response)
      Alert.alert('Erro', 'Erro abaixo de 500')
    }
  } catch (error) {
    console.log('Erro: ', error)
    Alert.alert('Erro', 'Erro no catch')
  }

  return data
}
