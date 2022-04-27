// @ts-nocheck
import { FC } from 'react'
import LoginForm from './login.form'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import Illustration from '../../assets/illustration.jpg'

import {
  Container,
  Title,
  Ilustration,
  Description,
  Row,
  CreateAccoutText,
  CreateAccoutButton,
  CreateAccoutButtonText
} from './login.styles'
import { RootStackParam } from '../../types/root-stack.type'

type NavitaionStak = NavigationProp<RootStackParam, 'Login'>

const Login: FC = () => {
  const navigation: NavitaionStak = useNavigation()
  return (
  <Container>
    <Ilustration source={Illustration} />
    <Title>Bem-vindo de volta 🤗</Title>
    <Description>Faça login para poder acessar a platafora e partilhar a localização com o comerciante</Description>

    <LoginForm />

    <Row>
      <CreateAccoutText>Não Possui uma conta?</CreateAccoutText>
      <CreateAccoutButton onPress={() => navigation.navigate('SignUp')}>
        <CreateAccoutButtonText>Criar agora</CreateAccoutButtonText>
      </CreateAccoutButton>
    </Row>
  </Container>
  )
}

export default Login
