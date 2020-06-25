import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import App from './components/App.jsx';
import '../public/styles/main.scss';

// root
const root = document.getElementById('app');

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

injectTapEventPlugin();
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </Provider>
      </AppContainer>,
      root
    );
  });
}