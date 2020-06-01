import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import colors from './themes/colors';
import {ThemeProvider} from 'styled-components';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
