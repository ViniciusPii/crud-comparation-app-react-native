import React from 'react';

import {Layout, Input, Button, Container} from '../../components';

const CreateAccount = () => {
  return (
    <Layout>
      <Container>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button text="Cadastrar" />
      </Container>
    </Layout>
  );
};

export default CreateAccount;
