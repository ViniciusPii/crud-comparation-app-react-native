import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme}) => theme.yellow};
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme}) => theme.purple600};
`;
