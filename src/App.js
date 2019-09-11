import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Store from './store';
import { History } from './services';
import GlobalStyle from './styles';
import Routes from './routes';

import { Header } from './components';

function App() {
  return (
    <Provider store={Store}>
      <Router history={History}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={5000} />
      </Router>
    </Provider>
  );
}

export default App;
