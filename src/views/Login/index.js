import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Layout,
  Icon,
  Button,
  CreateLink,
  Input,
  Container,
} from '../../components';

const Login = () => {
  const navigation = useNavigation();

  return (
    <Layout bgColor="purple600">
      <Container>
        <Icon name="account-circle" fs={75} mb={40} />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Login" onPress={() => {}} />
      </Container>
      <CreateLink onPress={() => navigation.navigate('CreateAccount')} />
    </Layout>
  );
};

export default Login;
