import React from 'react';

import * as S from './styles';
import Icon from '../Icon';

const Button = ({...props}) => {
  const {text, loading, type, textColor, icon, size, iconColor, iconMr} = props;

  if (type === 'link') {
    return (
      <S.ButtonLink>
        <Icon name={icon} fs={size} iconColor={iconColor} mr={iconMr} />
        <S.TextButtonLink {...props}>{text}</S.TextButtonLink>
      </S.ButtonLink>
    );
  }

  return (
    <S.Button {...props}>
      {loading ? (
        <S.LoadingButton loadingColor={textColor} />
      ) : (
        <>
          <Icon name={icon} fs={size} iconColor={iconColor} mt={iconMr} />
          <S.TextButton {...props}>{text}</S.TextButton>
        </>
      )}
    </S.Button>
  );
};

Button.defaultProps = {
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  bgColor: 'yellow',
  textColor: 'purple600',
  textLinkColor: 'yellow',
  fs: 20,
  iconColor: 'yellow',
};

export default Button;
