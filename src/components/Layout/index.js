import React from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Layout = ({...props}) => {
  const {children, bgColor} = props;

  return (
    <S.Background bgColor={bgColor}>
      <S.Status bgColor={bgColor} />
      <S.Container>{children}</S.Container>
    </S.Background>
  );
};

Layout.defaultProps = {
  bgColor: 'red',
};

Layout.propType = {
  bgColor: PropTypes.string,
};

export default Layout;
