import styled from 'styled-components/native';

export const Container = styled.View`
  width: 115%;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
`;
