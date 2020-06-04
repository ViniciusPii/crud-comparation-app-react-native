import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../../services/firebase';

import {
  Layout,
  Footer,
  Container,
  List,
  Button,
  Text,
} from '../../../components';
import {ActivityIndicator} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  let uid = firebase.auth().currentUser.uid;

  useState(() => {
    setLoading(true);
    firebase
      .database()
      .ref('users')
      .child(uid)
      .on('value', snap => {
        setUsers([]);

        snap.forEach(item => {
          let NewUses = {
            uid,
            key: item.key,
            name: item.val().name,
            office: item.val().office,
          };

          setUsers(oldUsers => [...oldUsers, NewUses]);
        });
        setLoading(false);
      });
  });

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
