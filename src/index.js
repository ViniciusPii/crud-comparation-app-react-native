import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppProvider} from './components';

import Routes from './routes';
import AuthProvider from './contexts/AuthContext';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
