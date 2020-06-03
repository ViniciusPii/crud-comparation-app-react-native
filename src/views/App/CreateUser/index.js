import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../../services/firebase';

import {Layout, Input, Container, Button, Clear} from '../../../components';

const CreateUser = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');

  const uid = firebase.auth().currentUser.uid;
  const key = firebase
    .database()
    .ref('users')
    .child(uid)
    .push().key;

  const handleSubmitAdd = () => {
    if (name === '' || office === '') {
      alert('Preencha todos os Dados');
      return;
    }

    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .set({name, office});

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
