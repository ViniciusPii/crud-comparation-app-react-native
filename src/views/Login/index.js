import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../services/firebase';

import {
  Layout,
  Icon,
  Button,
  CreateLink,
  Input,
  Container,
} from '../../components';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    if (email === '' || password === '') {
      alert('Preencha todos os campos!');
      setLoading(false);
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Logado com sucesso!');
        setLoading(false);
      })
      .catch(() => {
        alert('Ah não, usuário ou senha incorretos!');
        setLoading(false);
      });
  };

  return (
    <Layout bgColor="purple600">
      <Container>
        <Icon name="account-circle" fs={75} mb={40} />
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
          autoCapitalize="none"
          secureTextEntry
        />
        <Button text="Login" onPress={handleLogin} loading={loading} />
      </Container>
      <CreateLink onPress={() => navigation.navigate('CreateAccount')} />
    </Layout>
  );
};

export default Login;
