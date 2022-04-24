import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #fff;

  padding: 0 16px;

  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: Poppins_900Black;
  font-weight: 900;
  color: #000;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #6A6A6A; 
  margin-bottom: 20px;

  font-family: Poppins_400Regular;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 45px;

  border-radius: 8px;
  margin: 5px 0;

  background: #F1F1F1;

  border: 1px solid #F1F1F1;

  padding: 0 10px;

  font-family: Poppins_400Regular;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 45px;

  border-radius: 8px;
  margin: 10px 0;

  background: #000;

  border: 1px solid #000;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: Poppins_700Bold;
  color: #fff;
`;