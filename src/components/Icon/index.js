import React from 'react';

import * as S from './styles';

const Icon = ({...props}) => {
  return <S.MyIcon {...props} />;
};

Icon.defaultProps = {
  iconColor: 'yellow',
  fs: 30,
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
};

export default Icon;
