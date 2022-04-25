// @ts-nocheck
import { FC } from 'react'
import LoginForm from './login.form'
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

const Login: FC = () => (
  <Container>
    <Ilustration source={Illustration} />
    <Title>Bem-vindo de volta 🤗</Title>
    <Description>Faça login para poder acessar a platafora e partilhar a localização com o comerciante</Description>

    <LoginForm />

    <Row>
      <CreateAccoutText>Não Possui uma conta?</CreateAccoutText>
      <CreateAccoutButton>
        <CreateAccoutButtonText>Criar agora</CreateAccoutButtonText>
      </CreateAccoutButton>
    </Row>
  </Container>
)

export default Login
