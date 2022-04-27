/* eslint-disable no-undef */
// @ts-nocheck

import { FC, useState } from 'react'
import BackIcon from '../../assets/back-icon.png'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParam } from '../../types/root-stack.type'
import { Dimensions, Alert } from 'react-native'

import {
  Form,
  Button,
  Input,
  GhostElement,
  ButtonsWrapper,
  BackButton,
  BackButtonIcon,
  Description
} from './sign-up.styles'

type NavitaionStak = NavigationProp<RootStackParam, 'Login'>

const SignUpForm: FC = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const width = Dimensions.get('screen').width
  const navigation: NavitaionStak = useNavigation()
  const [confirmPassword, setConfirmPassword] = useState('')
  const [values, setValues] = useState({
    name: '',
    phone: '999999999',
    num_BI: '',
    password: '',
    address: 'some_address',
    driver_id: '',
    email: '',
    driver_type: 'some_driver'
  })

  const handleSignUp = async () => {
    if (confirmPassword === values.password) {
      try {
        const response = await fetch('http://192.168.0.105:8080/api/v1/drivers', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })

        const res = await response.json()

        if (response.status === 201) {
          console.log('201: ', response)
          navigation.navigate('Login')
        } else {
          console.log('N 201: ', res)
        }
      } catch (error) {
        console.log('Erro: ', error)
        Alert.alert('Erro', 'Erro no catch')
      }
    } else {
      Alert.alert('Palavra passe', 'A palavras-pases diferentes')
    }
  }

  const handleNext = () => {
    if (slideIndex === 1) {
      handleSignUp()
    } else setSlideIndex(prev => prev + 1)
  }

  return (
    <Form>
      <Description>{slideIndex === 0 ? 'Informações pessoais' : 'Agora, um pouco de segurança, e já está.'}</Description>

      {slideIndex === 0
        ? (
        <>
          <Input
            placeholder="Digite o Nome"
            width={(width - 32).toString()}
            onChangeText={(value) => setValues(prev => ({ ...prev, name: value }))}
          />
          <Input
            placeholder="Digete o Email"
            width={(width - 32).toString()}
            onChangeText={(value) => setValues(prev => ({ ...prev, email: value }))}
          />
          <Input
            placeholder="Digete o N do BI"
            width={(width - 32).toString()}
            onChangeText={(value) => setValues(prev => ({ ...prev, num_BI: value }))}
          />
          <Input
            placeholder="Digete a Carta de Condiução"
            width={(width - 32).toString()}
            onChangeText={(value) => setValues(prev => ({ ...prev, driver_id: value }))}
          />
        </>
          )
        : (
        <>
          <Input
            placeholder="Digite o palavra-passe"
            width={(width - 32).toString()} secureTextEntry={true}
            onChangeText={(value) => setValues(prev => ({ ...prev, password: value }))}
          />
          <Input
            placeholder="Confirmar a palavra-passe"
            width={(width - 32).toString()} secureTextEntry={true}
            onChangeText={(value) => setConfirmPassword(value)}
          />
          <GhostElement/>
          <GhostElement/>
        </>
          )}

      <ButtonsWrapper>
        {slideIndex === 1 && (
          <BackButton onPress={() => setSlideIndex(0)}>
            <BackButtonIcon source={BackIcon}/>
          </BackButton>
        )}

        <Button
          style={{ position: 'absolute', right: 0 }}
          width={(width * 40 / 100).toString()}
          onPress={() => handleNext()}
          text={slideIndex === 0 ? 'Avançar' : 'Criar Conta'}
        />
      </ButtonsWrapper>
    </Form>
  )
}

export default SignUpForm
