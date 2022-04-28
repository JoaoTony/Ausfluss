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
export const Avatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
`
export const Title = styled.Text`
  font-size: 22px;
  font-family: Poppins_700Bold;
  color: #000;
`
export const UserInformationWrapper = styled.View`
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 30px;
`
export const UserInformationTitle = styled.Text`
  font-size: 16px;
  font-family: Poppins_700Bold;
  color: #3D3D3D;
`

export const UserInformationText = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  color: #3D3D3D;
  margin-bottom: 10px;
`
export const ShowVehiclesButton = styled.TouchableOpacity``

export const ShowVehiclesButtonText = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  color: #4AD196;
  margin-bottom: 10px;

  `
