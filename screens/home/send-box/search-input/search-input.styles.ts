import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 50px;

  background-color: #fff;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;

  margin: 30px 0;
`

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
  margin-left: 10px;
`

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;

  flex: 1;
  color: #606060;
  font-size: 15px;
  font-family: Poppins_400Regular;

  padding-left: 5px;
`
