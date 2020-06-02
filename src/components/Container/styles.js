import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: ${({w}) => w};
  height: ${({h}) => h};
  justify-content: ${({justify}) => justify};
  align-items: center;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  margin-right: ${({mr}) => mr}px;
  margin-left: ${({ml}) => ml}px;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
`;
