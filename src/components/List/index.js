import React from 'react';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import Card from '../Card';

const List = ({...props}) => {
  const navigation = useNavigation();

  return (
    <S.List
      {...props}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <Card
          data={item}
          elevation={10}
          onPress={() => navigation.navigate('EditUser', {key: item.key})}
        />
      )}
    />
  );
};

export default List;
