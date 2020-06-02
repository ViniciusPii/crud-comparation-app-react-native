import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const Background = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({theme, bgColor}) => theme[bgColor]};
`;

export const Status = styled(StatusBar).attrs(({theme, bgColor}) => ({
  barStyle: 'light-content',
  backgroundColor: theme.purple600,
}))``;

export const StatusBarIOS = styled.SafeAreaView`
  background-color: ${({theme, barColorIOS}) => theme[barColorIOS]};
`;

export const FooterIOS = styled.SafeAreaView`
  background-color: ${({theme, footerColorIOS}) => theme[footerColorIOS]};
`;
