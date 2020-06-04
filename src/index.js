import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppProvider} from './components';

import Routes from './routes';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
