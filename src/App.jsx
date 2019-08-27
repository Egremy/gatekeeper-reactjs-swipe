// Dependencies
import React from 'react';

// Material-UI Core
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Assets
import { GlobalStyles } from './GlobalStyles';

// Components
import { AppDrawer } from './components/AppDrawer';

// Material UI themes
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#D1DDE7',
      main: '#9E9E9E',
      dark: '#454D66',
      contrastText: '#454D66'
    },
    error: {
      light: '#f39898',
      main: '#EF6C6C',
      dark: '#a74b4b',
      contrastText: '#a74b4b'
    }
  }
});

export const App = () => (
  <div>
    <GlobalStyles />
    <MuiThemeProvider theme={theme}>
      <AppDrawer />
    </MuiThemeProvider>
  </div>
);
