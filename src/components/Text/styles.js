import styled from 'styled-components/native';

export const Text = styled.Text`
  width: ${({w}) => w};
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  margin-right: ${({mr}) => mr}px;
  margin-left: ${({ml}) => ml}px;
  text-align: ${({textAlign}) => textAlign};
  font-size: ${({fs}) => fs}px;
  font-weight: ${({bold}) => bold};
  color: ${({theme, textColor}) => theme[textColor]};
`;
