import styled from 'styled-components/native'

export const Input = styled.TextInput<{ width: string}>`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  height: 50px;
  background-color: #E1EAED;
  padding: 10px;
  border-radius: 8px;

  color: #606060;
  font-size: 12px;
  font-family: Poppins_400Regular;
`
