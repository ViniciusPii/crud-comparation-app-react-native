import React from 'react';
import {Layout, Input, Container, Button} from '../../../components';

const EditUser = () => {
  return (
    <Layout footerColorIOS="white">
      <Container>
        <Input type="outline" label="Nome" />
        <Input type="outline" label="Cargo" />
        <Button text="Editar" onPress={() => {}} />
      </Container>
    </Layout>
  );
};

export default EditUser;
