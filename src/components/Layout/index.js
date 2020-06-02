import React, {Fragment} from 'react';

import * as S from './styles';

import PropTypes from 'prop-types';

const Layout = ({...props}) => {
  const {children, bgColor, barColorIOS, footerColorIOS} = props;

  return (
    <Fragment>
      <S.StatusBarIOS barColorIOS={barColorIOS} />
      <S.Background bgColor={bgColor}>
        <S.Status bgColor={bgColor} />
        {children}
      </S.Background>
      <S.FooterIOS footerColorIOS={footerColorIOS} />
    </Fragment>
  );
};

Layout.defaultProps = {
  bgColor: 'white',
  footerColorIOS: 'purple600',
  barColorIOS: 'purple600',
};

Layout.propType = {
  bgColor: PropTypes.string,
};

export default Layout;
