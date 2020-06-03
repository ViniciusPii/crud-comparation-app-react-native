import React, {useState} from 'react';

import firebase from '../../../services/firebase';

import {Layout, Input, Container, Button} from '../../../components';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');

  const uid = firebase.auth().currentUser.uid;
  const key = firebase
    .database()
    .ref('users')
    .child(uid)
    .push().key;

  const handleSubmitAdd = () => {
    firebase
      .database()
      .ref('users')
      .child(uid)
      .child(key)
      .set({name, office});
  };

  return (
    <Layout footerColorIOS="white">
      <Container>
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
      </Container>
    </Layout>
  );
};

export default CreateUser;
