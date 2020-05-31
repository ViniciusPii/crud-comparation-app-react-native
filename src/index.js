import React from 'react';

import colors from './themes/colors';
import {ThemeProvider} from 'styled-components';

import Login from './views/Login';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
