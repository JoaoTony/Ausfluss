import React, { FC } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

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
import { ChatProps } from './chat.types'
import { fakeDataChat } from './chat-fake-data'
import Message from './nessage'

const Chat: FC = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const { name } = route.params as ChatProps

  return (
    <Container>
      <CustomHeader>
        <GoBackButton onPress={() => navigation.goBack()}>
          <GoBackIcon source={require('../../assets/back-icon.png')}/>
        </GoBackButton>

        <Title>{name}</Title>
      </CustomHeader>

      <FlatList
        data={fakeDataChat}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 100
        }}
        renderItem={(item) => <Message {...item.item} />}
      />

      <Footer>
        <Input placeholder="digite uma mensagem"/>

        <ButtonSendMessage>
          <ButtonSendMessageIcon source={require('../../assets/icon-send.png')} />
        </ButtonSendMessage>
      </Footer>
    </Container>
  )
}
export default Chat
