import React from 'react';
import { createTheme, ThemeProvider, Button } from '@mui/material';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <Button variant="contained">Hello World</Button>
  </ThemeProvider>
);

export default App;
