import React from 'react';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../services/firebase';

import * as S from './styles';

import Icon from '../Icon';
import Button from '../Button';

const Card = ({...props}) => {
  const navigation = useNavigation();

  const {data} = props;
  const {name, office, key, uid} = data;

  const handleEdit = () => {
    navigation.navigate('EditUser', {
      key,
      uid,
      userName: name,
      userOffice: office,
    });
  };

  const handleDelete = () => {
    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .remove();
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
            onPress={handleEdit}
          />
          <Button
            type="link"
            icon="trash-can"
            iconColor="purple600"
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
