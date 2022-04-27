import React, { FC, useState } from 'react'

import {
  Container,
  Text,
  Title,
  ShareLocationButton,
  ShareLocationButtonIcon,
  Row,
  StopButton,
  PauseButton,
  ButtonText
} from './share-location.styles'

const ShareLocation: FC = () => {
  const [showButtons, setShowuttons] = useState(false)
  return (
    <Container>
      <Title>Partilhar Localização</Title>
      <Text>Ao clicar no botão a abaixo, a tua localização será partilhada em tempo real.</Text>

      <ShareLocationButton onPress={() => setShowuttons(prev => !prev)}>
        <ShareLocationButtonIcon source={require('../../../assets/location.png')} />
      </ShareLocationButton>

      {showButtons && (
        <Row>
          <StopButton>
            <ButtonText>Parar</ButtonText>
          </StopButton>

          <PauseButton>
            <ButtonText>Pausar</ButtonText>
          </PauseButton>
        </Row>
      )}

    </Container>
  )
}

export default ShareLocation
