import React from 'react';
import * as S from './styles';

import {Layout, Icon, Button} from '../../components';

const Login = () => {
  return (
    <Layout bgColor="purple600">
      <Icon name="account-circle" fs={75} />
      <Button text="Login" onPress={() => {}} />
      <S.CreateLink>
        <S.Link>Crie sua conta já!</S.Link>
      </S.CreateLink>
    </Layout>
  );
};

export default Login;
