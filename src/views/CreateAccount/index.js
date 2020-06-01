import React from 'react';

import {Layout, Input, Button, Container, Text} from '../../components';

const CreateAccount = () => {
  return (
    <Layout>
      <Container>
        <Text
          text="Crie sua conta, é rapidinho ;)"
          mb={40}
          fs={20}
          textColor="purple600"
        />
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Cadastrar" />
      </Container>
    </Layout>
  );
};

export default CreateAccount;
