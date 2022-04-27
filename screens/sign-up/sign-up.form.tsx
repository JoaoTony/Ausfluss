// @ts-nocheck

import { FC, useState } from 'react'
import BackIcon from '../../assets/back-icon.png'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParam } from '../../types/root-stack.type'
import { Dimensions } from 'react-native'

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

  const handleNext = () => {
    if (slideIndex === 1) {
      navigation.navigate('Home')
    } else setSlideIndex(prev => prev + 1)
  }

  return (
    <Form>
      <Description>{slideIndex === 0 ? 'Informações pessoais' : 'Agora, um pouco de segurança, e já está.'}</Description>

      {slideIndex === 0
        ? (
        <>
          <Input placeholder="Digite o Nome" width={(width - 32).toString()}/>
          <Input placeholder="Digete 0 Telefone" width={(width - 32).toString()} />
          <Input placeholder="Digete o N do BI" width={(width - 32).toString()} />
          <Input placeholder="Digete a Carta de Condiução" width={(width - 32).toString()} />
        </>
          )
        : (
        <>
          <Input placeholder="Digite o palavra-passe" width={(width - 32).toString()} secureTextEntry={true} />
          <Input placeholder="Confirmar a palavra-passe" width={(width - 32).toString()} secureTextEntry={true} />
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
