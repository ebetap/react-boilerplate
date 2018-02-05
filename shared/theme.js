import { createMuiTheme } from 'material-ui/styles';
import toRem from './utils/unit-tools/toRem';

const theme = createMuiTheme({
  utils: {
    toRem,
  },
  typography: {
    fontFamily: '-apple-system, "BlinkMacSystemFont", "Helvetica Neue", "Segoe UI", sans-serif',
  },
});

export default theme;
