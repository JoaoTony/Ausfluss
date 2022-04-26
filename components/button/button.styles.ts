import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity<{ width: string}>`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  height: 50px;
  background-color: #4AD196;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: Poppins_700Bold;
`
