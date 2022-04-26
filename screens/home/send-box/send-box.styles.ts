import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #fff;

  padding: 0 16px;

  position: relative;

  align-items: center;
  justify-content: center;
`

export const CustomHeader = styled.View`
  width: ${width}px;
  height: 100px;
  background: #7FB6FD;

  position: absolute;
  top: 0;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: Poppins_700Bold;
  color: #000;

  text-align: center;

  margin-bottom: 20px;
`

export const ButtonShareLocation = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 50px;

  background: #000;
`
export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;

  margin-top: 20px;
`

export const StopButton = styled.TouchableOpacity`
  width: 150px;
  height: 45px;
  border-radius: 8px;

  background: #F77997;
  margin: 0 10px;

  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: Poppins_400Regular;
  color: #fff;

  text-align: center;
`

export const PauseButton = styled.TouchableOpacity`
  width: 150px;
  height: 45px;
  border-radius: 8px;

  background: #7979F7;
  margin: 0 10px;

  align-items: center;
  justify-content: center;
`
