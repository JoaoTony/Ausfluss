import { FC } from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParam } from '../root-stack.type'
import { Dimensions } from 'react-native'

import {
  Form,
  Button,
  Input
} from './login.styles'

type NavitaionStak = NavigationProp<RootStackParam, 'Login'>

const LoginForm: FC = () => {
  const width = Dimensions.get('screen').width
  const navigation: NavitaionStak = useNavigation()
  return (
    <Form>
      <Input placeholder="Digite o email" width={(width - 32).toString()}/>
      <Input placeholder="Digete a palavra-passe" width={(width - 32).toString()} secureTextEntry={true} />

      <Button
        width={(width - 32).toString()}
        onPress={() => navigation.navigate('Home')}
        text="Entrar"
      />
    </Form>
  )
}

export default LoginForm
