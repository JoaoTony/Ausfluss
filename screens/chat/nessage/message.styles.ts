import styled from 'styled-components/native'

export const Container = styled.View<{ amITheOwner: boolean}>`
  padding: 20px;
  background: ${({ amITheOwner }) => amITheOwner ? '#4AD196' : '#FFFFFF'};
  max-width: 80%;
  align-self: ${({ amITheOwner }) => amITheOwner ? 'flex-end' : 'flex-start'};

  border-radius: 8px;

  margin: 10px 0;
`
export const Text = styled.Text`
  font-size: 15px;
  color: #3D3D3D;

  font-family: Poppins_400Regular;
`
