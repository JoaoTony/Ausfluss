/* eslint-disable no-undef */
import AsyncStorage from '@react-native-async-storage/async-storage'
// const baseURL = 'http://192.168.0.105:8080'

const fetcher = (method: string) => async <T>(url: string, bodyR?: object) => {
  let loading = true
  const authValue = await AsyncStorage.getItem('AusflussAuth')
  const backEndIP = await AsyncStorage.getItem('backEndIP')

  const response = await fetch(`http://${backEndIP}:8080${url}`, {
    method,
    body: JSON.stringify(bodyR),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(authValue || '').token}`
    }
  })

  const data = response.status === 204 ? { body: 'no content' } : await response.json()
  loading = false
  return { status: response.status, data: data as T, loading }
}

export const getFetcher = fetcher('GET')
export const postFetcher = fetcher('POST')
export const deleteFetcher = fetcher('DELETE')
export const putFetcher = fetcher('PUT')
export const patchFetcher = fetcher('PATCH')
