import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/AuthContext';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {Layout, Container, Footer} from '../components';

const Routes = () => {
  const {signed, loading} = useAuth();

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

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
