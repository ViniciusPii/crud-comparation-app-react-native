/* eslint-disable no-alert */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Layout, Input, Container, Button, Clear} from '../../../components';
import {useApp} from '../../../contexts/AppContext';

const CreateUser = () => {
  const navigation = useNavigation();

  const {createUser} = useApp();

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');

  const handleSubmitAdd = () => {
    if (name === '' || office === '') {
      alert('Preencha todos os Dados');
      return;
    }

    createUser(name, office);

    setName('');
    setOffice('');

    navigation.navigate('Home');
  };

  return (
    <Layout footerColorIOS="white">
      <Container>
        <Clear>
          <Input
            type="outline"
            label="Nome"
            value={name}
            onChangeText={t => setName(t)}
          />
          <Input
            type="outline"
            label="Cargo"
            value={office}
            onChangeText={t => setOffice(t)}
          />
          <Button text="Cadastrar" onPress={handleSubmitAdd} />
        </Clear>
      </Container>
    </Layout>
  );
};

export default CreateUser;
