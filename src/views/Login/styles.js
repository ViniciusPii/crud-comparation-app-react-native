import styled from 'styled-components/native';

export const CreateLink = styled.View`
  width: 115%;
  height: 70px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: ${({theme}) => theme.purple800};
`;

export const Link = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.yellow};
`;
