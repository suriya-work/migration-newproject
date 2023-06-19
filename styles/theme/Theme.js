import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    mode: 'light',
    // mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

export default Theme;