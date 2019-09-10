import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Store from './store';
import GlobalStyle from './styles';
import Routes from './routes';

import { Header } from './components';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
