import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import theme from './theme';
import { store } from '@zachtball/reddit-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <EmotionThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </EmotionThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
