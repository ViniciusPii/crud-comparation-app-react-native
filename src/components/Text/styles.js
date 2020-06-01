import styled from 'styled-components/native';

export const Text = styled.Text`
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  margin-right: ${({mr}) => mr}px;
  margin-left: ${({ml}) => ml}px;
  font-size: ${({fs}) => fs}px;
  font-weight: ${({bold}) => bold};
  color: ${({theme, textColor}) => theme[textColor]};
`;
