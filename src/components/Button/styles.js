import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  margin-right: ${({mr}) => mr}px;
  margin-left: ${({ml}) => ml}px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.yellow};
`;

export const LoadingButton = styled(ActivityIndicator).attrs(({theme}) => ({
  color: theme.purple600,
  size: 'large',
}))``;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme}) => theme.purple600};
`;
