import React from 'react';
import {Platform} from 'react-native';

import * as S from './styles';

const Container = ({...props}) => {
  const {children} = props;

  return (
    <S.Container
      enable
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      {...props}>
      {children}
    </S.Container>
  );
};

Container.defaultProps = {
  w: '90%',
  h: 'auto',
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  justify: 'center',
  bgColor: 'ghost',
};

export default Container;
