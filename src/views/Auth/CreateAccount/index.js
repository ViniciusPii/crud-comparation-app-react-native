import React, {useState} from 'react';

import {useAuth} from '../../../contexts/AuthContext';

import {
  Layout,
  Input,
  Button,
  Clear,
  Text,
  Container,
} from '../../../components';

const CreateAccount = () => {
  const {loading, createAccount} = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    createAccount(name, email, password);
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
