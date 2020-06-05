import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useApp} from '../../../contexts/AppContext';

import {
  Layout,
  Footer,
  Container,
  List,
  Button,
  Text,
} from '../../../components';

const Home = () => {
  const navigation = useNavigation();

  const {loading, users, listUsers} = useApp();

  useEffect(() => {
    listUsers();
  }, [listUsers]);

  if (loading) {
    return (
      <Layout>
        <Container>
          <ActivityIndicator size="large" color="purple" />
          <Footer />
        </Container>
      </Layout>
    );
  }

  if (users.length === 0) {
    return (
      <Layout>
        <Text
          w="70%"
          fs={20}
          text="Você ainda não tem usuários cadastrados ;)"
          textColor="purple600"
          mt={40}
        />
        <Footer>
          <Button
            type="circle"
            mt={-60}
            bgColor="yellow"
            icon="plus"
            iconColor="purple600"
            onPress={() => navigation.navigate('CreateUser')}
          />
        </Footer>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container justify="flex-start">
        <List data={users} keyExtractor={users.key} />
        <Footer>
          <Button
            type="circle"
            mt={-60}
            bgColor="yellow"
            icon="plus"
            iconColor="purple600"
            onPress={() => navigation.navigate('CreateUser')}
          />
        </Footer>
      </Container>
    </Layout>
  );
};

export default Home;
