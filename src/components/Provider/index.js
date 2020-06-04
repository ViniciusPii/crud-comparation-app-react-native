import React from 'react';

import colors from '../../themes/colors';
import {ThemeProvider} from 'styled-components';

const Provider = ({children}) => {
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
};

export default Provider;
