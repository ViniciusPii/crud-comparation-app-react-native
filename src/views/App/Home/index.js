import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Layout,
  Footer,
  Container,
  Card,
  Button,
  Icon,
} from '../../../components';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <Container justify="flex-start" mt={40}>
        <Card elevation={8} onPress={() => navigation.navigate('EditUser')} />
        <Footer>
          <Button
            type="circle"
            mt={-60}
            bgColor="purple600"
            icon="plus"
            iconColor="white"
            onPress={() => navigation.navigate('CreateUser')}
          />
        </Footer>
      </Container>
    </Layout>
  );
};

export default Home;
