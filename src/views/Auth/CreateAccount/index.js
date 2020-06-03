import React, {useState} from 'react';

import firebase from '../../../services/firebase';

import {
  Layout,
  Input,
  Button,
  Clear,
  Text,
  Container,
} from '../../../components';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleCreateAccount = () => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        //separação do id e criação da chave para o item
        const {uid} = res.user;

        //criando o nó admin
        firebase
          .database()
          .ref('admin')
          .child(uid)
          .set({
            name,
            email,
          });

        alert('Cadastrado com sucesso!');
        setLoading(false);
      })
      .catch(erro => {
        if (name === '' || email === '' || password === '') {
          alert('Preencha todos os campos!');
          setLoading(false);
          return;
        }

        switch (erro.message) {
          case 'Password should be at least 6 characters':
            alert('Sua senha deve ter no minimo 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            alert('Esse email já está sendo utilizado por outro usuário!');
            break;
          case 'The email address is badly formatted.':
            alert('O formato do email não é válido!');
            break;
          default:
            alert('Não foi possível cadastrar o Usuário');
            break;
        }
        setLoading(false);
      });
  };

  return (
    <Layout footerColorIOS="white">
      <Container>
        <Clear>
          <Text
            text="Crie sua conta, é rapidinho ;)"
            mb={40}
            fs={20}
            textColor="purple600"
          />
          <Input
            placeholder="Nome"
            value={name}
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={t => setName(t)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={t => setEmail(t)}
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={t => setPassword(t)}
          />
          <Button
            text="Cadastrar"
            onPress={handleCreateAccount}
            loading={loading}
          />
        </Clear>
      </Container>
    </Layout>
  );
};

export default CreateAccount;
