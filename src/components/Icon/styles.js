import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MyIcon = styled(Icon).attrs(({theme, iconColor, fs}) => ({
  size: fs,
  color: theme[iconColor],
}))`
  margin-top: ${({mt}) => mt};
  margin-bottom: ${({mb}) => mb};
  margin-right: ${({mr}) => mr};
  margin-left: ${({ml}) => ml};
`;
