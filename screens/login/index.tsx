import { FC } from 'react';
import LoginForm from './login.form';

import { 
  Container, 
  Title,
  Description
} from './login.styles';

const Login: FC = () => (
  <Container>
    <Title>Bem-vindo de volta 🤗</Title>
    <Description>Faça login para poder partilhar a localização com o comerciante</Description>

    <LoginForm />
  </Container>
);

export default Login;