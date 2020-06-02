import React from 'react';

import {
  Layout,
  Footer,
  Container,
  Card,
  Button,
  Icon,
} from '../../../components';

const Home = () => {
  return (
    <Layout>
      <Container justify="flex-start" mt={40}>
        <Card elevation={8} />
        <Footer>
          <Button
            type="circle"
            mt={-60}
            bgColor="purple600"
            icon="plus"
            iconColor="white"
          />
        </Footer>
      </Container>
    </Layout>
  );
};

export default Home;
