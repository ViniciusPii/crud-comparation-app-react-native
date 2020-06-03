import React from 'react';
import {Layout, Input, Container, Button} from '../../../components';

const CreateUser = () => {
  return (
    <Layout footerColorIOS="white">
      <Container>
        <Input type="outline" label="Nome" />
        <Input type="outline" label="Cargo" />
        <Button text="Cadastrar" onPress={() => {}} />
      </Container>
    </Layout>
  );
};

export default CreateUser;
