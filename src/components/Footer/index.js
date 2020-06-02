import React from 'react';

import * as S from './styles';

const Footer = ({...props}) => {
  const {children} = props;
  return <S.Container {...props}>{children}</S.Container>;
};

Footer.defaultProps = {
  bgColor: 'purple600',
};

export default Footer;
