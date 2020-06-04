import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../../contexts/AuthContext';

import {
  Layout,
  Input,
  Button,
  Clear,
  Icon,
  Footer,
  Container,
} from '../../../components';

const Login = () => {
  const navigation = useNavigation();

  const {loading, login} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <Layout bgColor="purple600" footerColorIOS="purple800">
      <Container>
        <Clear>
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
        </Clear>
        <Footer bgColor="purple800">
          <Button
            type="link"
            text="Crie já sua conta!"
            icon="arrow-right"
            onPress={() => navigation.navigate('CreateAccount')}
            iconMr={5}
          />
        </Footer>
      </Container>
    </Layout>
  );
};

export default Login;
