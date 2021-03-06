import React from 'react';

import * as S from './styles';
import Icon from '../Icon';

const Button = ({...props}) => {
  const {
    text,
    loading,
    type,
    textColor,
    textLinkColor,
    icon,
    iconColor,
    size,
    iconMr,
    iconMl,
  } = props;

  if (type === 'link') {
    return (
      <S.ButtonLink {...props}>
        <Icon
          name={icon}
          iconColor={iconColor}
          fs={size}
          mr={iconMr}
          ml={iconMl}
        />
        <S.TextButtonLink textLinkColor={textLinkColor}>
          {text}
        </S.TextButtonLink>
      </S.ButtonLink>
    );
  }

  if (type === 'circle') {
    return (
      <S.BackgroundButton>
        <S.ButtonCircle {...props} mt={0}>
          <Icon
            name={icon}
            iconColor={iconColor}
            fs={size}
            mr={iconMr}
            ml={iconMl}
            mt={3}
          />
        </S.ButtonCircle>
      </S.BackgroundButton>
    );
  }

  return (
    <S.Button {...props}>
      {loading ? (
        <S.LoadingButton loadingColor={textColor} />
      ) : (
        <>
          <Icon
            name={icon}
            fs={size}
            iconColor={iconColor}
            mr={iconMr}
            ml={iconMl}
          />
          <S.TextButton textColor={textColor}>{text}</S.TextButton>
        </>
      )}
    </S.Button>
  );
};

Button.defaultProps = {
  mt: 30,
  mr: 0,
  mb: 0,
  ml: 0,
  bgColor: 'yellow',
  textColor: 'purple600',
  textLinkColor: 'yellow',
  iconColor: 'yellow',
};

export default Button;
