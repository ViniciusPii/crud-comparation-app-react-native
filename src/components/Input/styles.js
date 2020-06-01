import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.neutral,
}))`
  width: 100%;
  height: 55px;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 8px;
  font-size: 18px;
  color: ${({theme}) => theme.neutral800};
  background-color: ${({theme}) => theme.placeholderNeutral};
`;
