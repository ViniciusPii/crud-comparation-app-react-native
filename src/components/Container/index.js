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
  justify: 'center',
  bgColor: 'ghost',
};

export default Container;
