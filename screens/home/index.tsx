import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import {
  Container,
  Title,
  CustomHeader,
  ButtonShareLocation,
  Row,
  StopButton,
  PauseButton,
  ButtonText
} from './home.styles'

const Home: FC = () => {
  const navigation = useNavigation()
  const hasUnsavedChanges = false
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault()

        // Prompt the user before leaving the screen
        Alert.alert(
          'Tem certeza de que quer voltar?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action)
            }
          ]
        )
      }),
    [navigation, hasUnsavedChanges]
  )

  return (
    <Container>
      <CustomHeader></CustomHeader>
      <Title>Toque no Botão para começar a partilhar a localização</Title>
      <ButtonShareLocation></ButtonShareLocation>

      <Row>
        <StopButton>
          <ButtonText>Terminar Partilha</ButtonText>
        </StopButton>
        <PauseButton>
          <ButtonText>Pausar Partilha</ButtonText>
        </PauseButton>
      </Row>
    </Container>
  )
}

export default Home
