import React from 'react';

import * as S from './styles';

const Input = ({...props}) => {
  const {type, label, labelColor} = props;

  if (type === 'outline') {
    return (
      <>
        <S.Label labelColor={labelColor}>{label}</S.Label>
        <S.InputOutline {...props} />
      </>
    );
  }

  return <S.Input {...props} />;
};

Input.defaultProps = {
  borderColor: 'purple600',
  labelColor: 'purple600',
};

export default Input;
