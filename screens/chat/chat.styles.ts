import { Dimensions, FlatList } from 'react-native'
import styled from 'styled-components/native'

const screenWidth = Dimensions.get('screen').width

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #F1F2F4;

  padding: 0 16px;

  position: relative;

`
export const CustomHeader = styled.View`
  width: 100%;
  height: 100px;
  background:  #F1F2F4;

  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`
export const GoBackButton = styled.TouchableOpacity`
  margin-right: 20px;
  margin-bottom: 12px;
`
export const GoBackIcon = styled.Image`
  width: 11px;
  height: 18px;
`
export const Title = styled.Text`
  font-size: 22px;
  font-family: Poppins_700Bold;
  color: #000;
  margin: 0;
`

export const MessageList = styled(FlatList)`

`

export const Footer = styled.View`
  width: ${screenWidth}px;
  height: 90px;
  background-color: #C4C4C4;

  position: absolute;
  z-index: 2;

  left: 0;
  bottom: 0;
  right: 0;

  flex-direction: row;
  padding: 0 16px;
  align-items: center;
`
export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #EAEAEA;
  padding: 10px;
  border-radius: 8px;

  color: #606060;
  font-size: 12px;
  font-family: Poppins_400Regular;
`

export const ButtonSendMessage = styled.TouchableOpacity`
  margin-left: 10px;
`

export const ButtonSendMessageIcon = styled.Image`
  width: 30px;
  height: 30px;
`
