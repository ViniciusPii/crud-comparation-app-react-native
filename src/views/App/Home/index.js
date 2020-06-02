import React from 'react';

import {Layout, Footer, Container, Card} from '../../../components';

const Home = () => {
  return (
    <Layout>
      <Container justify="flex-start" mt={40}>
        <Card elevation={8} />
        <Footer />
      </Container>
    </Layout>
  );
};

export default Home;
