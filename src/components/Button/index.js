import React from 'react';

import * as S from './styles';

const Button = ({...props}) => {
  const {text} = props;

  return (
    <S.Button {...props}>
      <S.TextButton>{text}</S.TextButton>
    </S.Button>
  );
};

Button.defaultProps = {
  mt: 30,
  mr: 0,
  mb: 0,
  ml: 0,
};

export default Button;
