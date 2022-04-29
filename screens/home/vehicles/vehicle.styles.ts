import styled from 'styled-components/native'

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #F1F2F4;

  padding: 0 16px;
`
export const CustomHeader = styled.View`
  width: 100%;
  height: 100px;
  background:  #F1F2F4;

  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  position: relative;
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
export const Vehicle = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`

export const VehicleHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const VehicleTitle = styled.Text`
  font-size: 18px;
  font-family: Poppins_700Bold;
  color: #000;
  margin: 0;
`

export const VehicleStatus = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  color: #000;
  margin: 0;
`

export const VehicleWeight = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  color: #000;
  margin: 0;
`

export const AddVehicleButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 5px;
`
export const AddVehicleButtonIcon = styled.Image`

`

export const AddVehicleContainer = styled.View`
  position: absolute;
  z-index: 20;
  width: ${width}px;
  height: ${height}px;
  flex: 1;
  background-color: #00000060;

  align-items: center;
  justify-content: center;
  padding: 0 16px;
`

export const AddVehicleContent = styled.View`
  width: 100%;

  background-color: #fff;
  border-radius: 8px;

  position: relative;

  padding-bottom: 50px;
`

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 16px;
`
export const ButtonCloseIcon = styled.Image`

`

export const AddVehicleContentForm = styled.View`
  width: 100%;
  margin-top: 60px;
  align-items: center;
`
