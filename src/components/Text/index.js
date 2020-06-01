import React from 'react';

import * as S from './styles';

const Text = ({...props}) => {
  const {text} = props;

  return <S.Text {...props}>{text}</S.Text>;
};

Text.defaultProps = {
  fs: 18,
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  bold: 400,
  textColor: 'neutral700',
};

export default Text;
