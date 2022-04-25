import styled from 'styled-components/native'
import CustomInput from '../../components/input'
import CustomButton from '../../components/button'
import { Dimensions } from 'react-native'

const height = Dimensions.get('screen').height

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #fff;

  padding: 0 16px;

  align-items: flex-start;
  justify-content: center;
`

export const Ilustration = styled.Image`
  width: 70%;
  height: ${height * 30 / 100}px;
  align-self: center;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: Poppins_900Black;
  font-weight: 900;
  color: #000;
`

export const Description = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #3D3D3D;
  margin-bottom: 20px;

  font-family: Poppins_400Regular;
`

export const Form = styled.View`
  width: 100%;
`

export const Input = styled(CustomInput)`
  width: 100%;
  margin-bottom: 10px;
`

export const Button = styled(CustomButton)`

  margin: 10px 0;


  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: Poppins_700Bold;
  color: #fff;
`

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;

  margin-top: 20px;
`

export const CreateAccoutText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #262626;

  font-family: Poppins_400Regular;
`

export const CreateAccoutButton = styled.TouchableOpacity`
  border: none;
  background-color: transparent;
  margin-left: 5px;
`
export const CreateAccoutButtonText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #4AD196;

  border: none;
  background-color: transparent;

  font-family: Poppins_700Bold;
`
