import React from 'react';
import {Platform} from 'react-native';

import * as S from './styles';

import PropTypes from 'prop-types';

const Layout = ({...props}) => {
  const {children, bgColor} = props;

  return (
    <S.Background bgColor={bgColor}>
      <S.Status bgColor={bgColor} />
      <S.Container enable behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        {children}
      </S.Container>
    </S.Background>
  );
};

Layout.defaultProps = {
  bgColor: 'white',
};

Layout.propType = {
  bgColor: PropTypes.string,
};

export default Layout;
