import { createMuiTheme } from 'material-ui/styles';
import toRem from './utils/unit-tools/toRem';

const theme = createMuiTheme({
  utils: {
    toRem,
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  palette: {
    primary: {
      main: '#3d87fb',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;
