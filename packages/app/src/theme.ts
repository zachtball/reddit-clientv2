import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import { Theme as MuiTheme } from '@material-ui/core/styles';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends MuiTheme {}
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#001628',
      light: '#9ECCF1',
      dark: '#113C5E',
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
      secondary: 'rgba(0, 22, 40, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
});

export default theme;
