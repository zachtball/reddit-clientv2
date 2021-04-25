import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#001628',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#001628',
      paper: '#001628',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
});

export default theme;
