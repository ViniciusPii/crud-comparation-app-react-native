import React from 'react';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

import {useApp} from '../../contexts/AppContext';

import Icon from '../Icon';
import Button from '../Button';

const Card = ({...props}) => {
  const navigation = useNavigation();

  const {deleteUser} = useApp();

  const {data} = props;
  const {name, office, key} = data;

  const handleEdit = () => {
    navigation.navigate('EditUser', {
      key,
      userName: name,
      userOffice: office,
    });
  };

  const handleDelete = () => {
    deleteUser(key);
  };

  return (
    <S.Card {...props}>
      <S.CardContainer>
        <S.CardContent>
          <S.CardInfo>
            <Icon name="account" iconColor="purple600" mr={10} />
            <S.CardText>{name}</S.CardText>
          </S.CardInfo>
          <S.CardInfo>
            <Icon name="briefcase" iconColor="purple300" mr={10} />
            <S.CardText>{office}</S.CardText>
          </S.CardInfo>
        </S.CardContent>
        <S.CardActions>
          <Button
            type="link"
            icon="pencil"
            mr={10}
            iconColor="purple300"
            iconMr={10}
            onPress={handleEdit}
          />
          <Button
            type="link"
            icon="trash-can"
            iconColor="purple700"
            onPress={handleDelete}
          />
        </S.CardActions>
      </S.CardContainer>
    </S.Card>
  );
};

Card.defaultProps = {
  bgColor: 'white',
  mt: 0,
  mr: 0,
  mb: 15,
  ml: 0,
};

export default Card;
