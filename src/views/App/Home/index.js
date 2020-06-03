import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../../services/firebase';

import {
  Layout,
  Footer,
  Container,
  List,
  Button,
  Card,
} from '../../../components';

const Home = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  let uid = firebase.auth().currentUser.uid;

  useState(() => {
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
      });
  });

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
