import React from 'react';

import * as S from './styles';

const Button = ({...props}) => {
  const {text, onPress} = props;

  return (
    <S.Button onPress={onPress}>
      <S.TextButton>{text}</S.TextButton>
    </S.Button>
  );
};

export default Button;
