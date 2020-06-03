import React from 'react';

import * as S from './styles';

import Icon from '../Icon';
import Button from '../Button';

const Card = ({...props}) => {
  const {onPress, data} = props;
  const {name, office} = data;

  return (
    <S.Card {...props}>
      <S.CardContainer>
        <S.CardContent>
          <S.CardInfo>
            <Icon name="account" iconColor="purple600" mr={10} />
            <S.CardText>{name}</S.CardText>
          </S.CardInfo>
          <S.CardInfo>
            <Icon name="briefcase" iconColor="purple600" mr={10} />
            <S.CardText>{office}</S.CardText>
          </S.CardInfo>
        </S.CardContent>
        <S.CardActions>
          <Button
            type="link"
            icon="pencil"
            mr={10}
            iconColor="purple600"
            iconMr={10}
            onPress={onPress}
          />
          <Button type="link" icon="trash-can" iconColor="purple600" />
        </S.CardActions>
      </S.CardContainer>
    </S.Card>
  );
};

Card.defaultProps = {
  bgColor: 'white',
  mt: 0,
  mr: 0,
  mb: 20,
  ml: 0,
};

export default Card;
