import React, { FC, useState, useEffect } from 'react'

import * as Location from 'expo-location'

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
import { postFetcher } from '../../../services/fetcher'

import { Address, Coordinates } from './share-location.types'

const ShareLocation: FC = () => {
  const [showButtons, setShowuttons] = useState(false)
  const [location, setLocation] = useState<Coordinates>()
  const [address, setAddress] = useState<Address>()
  const [errorMsg, setErrorMsg] = useState('')

  const sendLocation = async () => {
    const { data, status } = await postFetcher('/location', {
      latitude: location?.coords.latitude,
      longitude: location?.coords.longitude,
      country: address?.country,
      province: address?.region,
      municipe: address?.subregion,
      city: address?.city
    })

    console.log('Tendado mandar localizasao: ', data, status)

    setShowuttons(prev => !prev)
  }

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const location = await Location.getCurrentPositionAsync({}) as Coordinates
      const address = await Location.reverseGeocodeAsync(location.coords) as Address[]
      console.log(address[0])
      setAddress(address[0])
      setLocation(location)
    })()
  }, [])

  console.log(location)

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location.coords.latitude)
  }
  return (
    <Container>
      <Title>Partilhar Localização</Title>
      <Text>Ao clicar no botão a abaixo, a tua localização será partilhada em tempo real.</Text>

      <ShareLocationButton onPress={() => sendLocation()}>
        <ShareLocationButtonIcon source={require('../../../assets/location.png')} />
      </ShareLocationButton>

      <Text>{text}</Text>

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
