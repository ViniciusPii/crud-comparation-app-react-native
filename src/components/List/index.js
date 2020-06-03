import React from 'react';

import * as S from './styles';
import Card from '../Card';

const List = ({...props}) => {
  return (
    <S.List
      {...props}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <S.Container>
          <Card elevation={8} data={item} />
        </S.Container>
      )}
    />
  );
};

export default List;
