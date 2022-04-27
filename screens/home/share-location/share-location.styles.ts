import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #F1F2F4;

  padding: 0 16px;

  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
`
export const Title = styled.Text`
  font-size: 22px;
  font-family: Poppins_700Bold;
  color: #000;
`

export const Text = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  color: #3D3D3D;
  margin-bottom: 10px;
`

export const ShareLocationButton = styled.TouchableOpacity`
 width: 60px;
 height: 60px;
 background-color: #4AD196;

 border-radius: 30px;

 align-items: center;
 justify-content: center;
`

export const ShareLocationButtonIcon = styled.Image`
  width: 26px;
  height: 26px;
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

  background: #D14;
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

  background: #C4C4C4;
  margin: 0 10px;

  align-items: center;
  justify-content: center;
`
