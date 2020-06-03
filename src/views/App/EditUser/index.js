import React, {useEffect} from 'react';

import {Layout, Input, Container, Button} from '../../../components';

const EditUser = ({route}) => {
  const {key} = route.params;

  useEffect(() => {
    alert(key);
  });

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
