import styled from 'styled-components/native';

export const Container = styled.View`
  width: 115%;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: ${({theme}) => theme.purple800};
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.yellow};
`;
