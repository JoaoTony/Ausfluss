import { FC } from 'react';

import { 
  Form, 
  Input, 
  Button, 
  ButtonText, 
} from './login.styles';

const LoginForm: FC = () => (
  <Form>
    <Input placeholder="Digite o email"/>
    <Input placeholder="Digete a palavra-passe" secureTextEntry={true} />

    <Button>
      <ButtonText>Entrar</ButtonText>
    </Button>
  </Form>
);

export default LoginForm;