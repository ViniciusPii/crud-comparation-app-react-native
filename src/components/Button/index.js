import React from 'react';

import * as S from './styles';

const Button = ({...props}) => {
  const {text, loading} = props;

  return (
    <S.Button {...props}>
      {loading ? <S.LoadingButton /> : <S.TextButton>{text}</S.TextButton>}
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
