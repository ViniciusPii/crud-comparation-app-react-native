import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MyIcon = styled(Icon).attrs(({theme, iconColor, fs}) => ({
  size: fs,
  color: theme[iconColor],
}))`
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  margin-right: ${({mr}) => mr}px;
  margin-left: ${({ml}) => ml}px;
`;
