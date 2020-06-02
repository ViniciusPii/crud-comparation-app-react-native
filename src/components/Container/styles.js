import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: ${({w}) => w};
  height: ${({h}) => h};
  justify-content: ${({justify}) => justify};
  align-items: center;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
`;
