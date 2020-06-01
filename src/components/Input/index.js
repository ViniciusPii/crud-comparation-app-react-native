import React from 'react';

import * as S from './styles';

const Input = ({...props}) => {
  const {placeholder} = props;

  return <S.Input placeholder={placeholder} />;
};

export default Input;
