import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from './components';

import Routes from './routes';
import AuthProvider from './contexts/AuthContext';
import AppProvider from './contexts/AppContext';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <AuthProvider>
          <AppProvider>
            <Routes />
          </AppProvider>
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
