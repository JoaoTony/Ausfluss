// @ts-nocheck
import { FC } from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import Illustration from '../../assets/illustration.jpg'

import {
  Container,
  Title,
  Ilustration,
  Description,
  Row,
  SingnInText,
  SingnInButton,
  SingnInButtonText
} from './sign-up.styles'
import SignUpForm from './sign-up.form'
import { RootStackParam } from '../../types/root-stack.type'
type NavitaionStak = NavigationProp<RootStackParam, 'Login'>

const SignUp: FC = () => {
  const navigation: NavitaionStak = useNavigation()

  return (
  <Container>
    <Ilustration source={Illustration} />
    <Title>Criar Conta</Title>
    <Description>Com uma conta driver, tu poderás achar os teus clientes de forma mais Rápoda e Acessível.</Description>

    <SignUpForm />

    <Row>
      <SingnInText>Já Possui uma conta?</SingnInText>
      <SingnInButton onPress={() => navigation.navigate('Login')}>
        <SingnInButtonText>Entrar agora</SingnInButtonText>
      </SingnInButton>
    </Row>
  </Container>
  )
}

export default SignUp
