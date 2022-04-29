import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #F1F2F4;

  padding: 0 16px;

  position: relative;

`

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background:  #F1F2F4;
  padding-bottom: 100px;
`

export const CustomHeader = styled.View`
  width: 100%;
  height: 100px;
  background:  #F1F2F4;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

export const HaderRow = styled.View`
  flex-direction: row;
`

export const TitleLight = styled.Text`
  font-size: 22px;
  font-family: Poppins_400Regular;
  color: #000;
`

export const Title = styled.Text`
  font-size: 22px;
  font-family: Poppins_700Bold;
  color: #000;
`
