import { FC, useState } from 'react'

import { Dimensions } from 'react-native'

import { useAuthContext } from '../../context/auth.context'

import {
  Form,
  Button,
  Input
} from './login.styles'

const LoginForm: FC = () => {
  const width = Dimensions.get('screen').width
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { signIn } = useAuthContext()

  const handleSignIn = async () => {
    await signIn(email, password)
  }

  return (
    <Form>
      <Input
        placeholder="Digite o email"
        width={(width - 32).toString()}
        onChangeText={(e) => setEmail(e)}
        />
      <Input
        placeholder="Digete a palavra-passe"
        width={(width - 32).toString()}
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />

      <Button
        width={(width - 32).toString()}
        onPress={() => handleSignIn()}
        text="Entrar"
      />
    </Form>
  )
}

export default LoginForm
