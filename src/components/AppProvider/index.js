import React from 'react';

import colors from '../../themes/colors';
import {ThemeProvider} from 'styled-components';

const AppProvider = ({children}) => {
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
};

export default AppProvider;
