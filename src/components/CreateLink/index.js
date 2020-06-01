import React from 'react';

import * as S from './styles';
import {Icon} from '..';

const CreateLink = ({...props}) => {
  const {onPress} = props;

  return (
    <S.Container>
      <S.ButtonLink onPress={onPress}>
        <Icon name="exit-to-app" mr={10} />
        <S.TextButton>Crie sua conta já!</S.TextButton>
      </S.ButtonLink>
    </S.Container>
  );
};

export default CreateLink;
