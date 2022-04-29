import React, { FC, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

import useSWR from 'swr'

import { FlatList } from 'react-native'

import {
  Container,
  CustomHeader,
  GoBackButton,
  GoBackIcon,
  Title,
  Footer,
  Input,
  ButtonSendMessage,
  ButtonSendMessageIcon
} from './chat.styles'
import { ChatProps, MessageProps } from './chat.types'
import Message from './nessage'
import { postFetcher } from '../../services/fetcher'

const Chat: FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [newMessage, setNewMessage] = useState('')

  const { name, id } = route.params as ChatProps

  const handleSendMessage = async () => {
    if (newMessage) {
      postFetcher('/api/v1/messages', {
        to: id,
        content: newMessage
      })
    }

    setNewMessage('')
  }

  const { data } = useSWR<MessageProps[]>(`http://192.168.0.105:8080/api/v1/messages/?to=${id}`)

  console.log('Tem mensagem: ', data)

  return (
    <Container>
      <CustomHeader>
        <GoBackButton onPress={() => navigation.goBack()}>
          <GoBackIcon source={require('../../assets/back-icon.png')}/>
        </GoBackButton>

        <Title>{name}</Title>
      </CustomHeader>

      {data && (
        <FlatList
        data={[...data].reverse()}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        inverted
        contentContainerStyle={{
          marginTop: 100,
          paddingBottom: 10
        }}
        renderItem={(item) => <Message owner={item.item.from_type} message={item.item.content} />}
      />
      )}

      <Footer>
        <Input placeholder="digite uma mensagem" value={newMessage} onChangeText={value => setNewMessage(value)} />

        <ButtonSendMessage onPress={() => handleSendMessage()}>
          <ButtonSendMessageIcon source={require('../../assets/icon-send.png')} />
        </ButtonSendMessage>
      </Footer>
    </Container>
  )
}
export default Chat
