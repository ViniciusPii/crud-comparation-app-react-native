import React from 'react';
import {View, Text} from 'react-native';
import {Layout, Footer, Container, Button} from '../../../components';

const Home = () => {
  return (
    <Layout bgColor="purple600">
      <Container bgColor="white" w="100%">
        <Container>
          <Button text="Deu certo" />
        </Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Home;
