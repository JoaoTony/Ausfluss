import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
  useEffect
} from 'react'
import { Alert } from 'react-native'
import { signInService } from '../services/sign-in'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Auth } from '../types/auth.type'

interface AuthContextProps {
  loading: boolean,
  auth?: Auth,
  signIn: (email: string, password: string) => Promise<Auth>,
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState<Auth>()

  const getValueFroStorage = async () => {
    const authValue = await AsyncStorage.getItem('AusflussAuth')

    if (authValue) {
      setAuth(JSON.parse(authValue))
    }

    setLoading(false)
  }

  useEffect(() => {
    getValueFroStorage()
  }, [])

  const signIn = useCallback(async (email: string, password: string): Promise<any> => {
    try {
      const response = await signInService(email, password)

      AsyncStorage.setItem('AusflussAuth', JSON.stringify(response))
      setAuth(response)

      return response
    } catch (error) {
      Alert.alert('Erro ao tentar logar', 'Alguma coisa deu errado ao tentar logar, por favor, tente movamente mais tarde')
    }
  }, [])

  const signOut = useCallback(async () => {
    AsyncStorage.removeItem('AusflussAuth')
    setAuth(undefined)
  }, [])

  return (
    <AuthContext.Provider value={{ loading, auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
