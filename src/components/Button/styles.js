import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  margin-right: ${({mr}) => mr}px;
  margin-left: ${({ml}) => ml}px;
  border-radius: 8px;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
`;

export const LoadingButton = styled(ActivityIndicator).attrs(
  ({theme, loadingColor}) => ({
    color: theme[loadingColor],
    size: 'large',
  }),
)``;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme, textColor}) => theme[textColor]};
`;

// Botão estilo link

export const ButtonLink = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TextButtonLink = styled.Text`
  font-size: 18px;
  color: ${({theme, textLinkColor}) => theme[textLinkColor]};
`;
