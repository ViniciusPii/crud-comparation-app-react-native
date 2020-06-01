import React from 'react';

import {
  Layout,
  Icon,
  Button,
  CreateLink,
  Input,
  Container,
} from '../../components';

const Login = () => {
  return (
    <Layout bgColor="purple600">
      <Container>
        <Icon name="account-circle" fs={75} mb={40} />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Login" onPress={() => {}} />
      </Container>
      <CreateLink />
    </Layout>
  );
};

export default Login;
