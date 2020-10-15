import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme';

import { FuegoProvider } from '@nandorojo/swr-firestore';
import { fuego } from './config/firebase';
import { CssBaseline } from '@material-ui/core';

// import '@fortawesome/fontawesome-free/css/all.min.css'; import
//   'bootstrap-css-only/css/bootstrap.min.css'; import
//   'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FuegoProvider fuego={fuego}>
        <CssBaseline />
        <App />
      </FuegoProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
