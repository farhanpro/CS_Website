import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b447f',      // Your firm’s blue (you used this before)
      light: '#2559a3',
    },
    secondary: {
      main: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: { fontWeight: 700 },
    h5: { fontWeight: 600 },
  },
});

export default theme;