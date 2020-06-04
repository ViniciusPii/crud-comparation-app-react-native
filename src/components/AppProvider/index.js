import React from 'react';

import colors from '../../themes/colors';
import {ThemeProvider} from 'styled-components';
import AuthProvider from '../../contexts/AuthContext';

const AppProvider = ({children}) => {
  return (
    <ThemeProvider theme={colors}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
