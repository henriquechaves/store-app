import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Login from './app/containers/loginContainer'

import MeusProdutos from './app/containers/myProductsContainer'

import NovoProduto from './app/containers/ProductContainer'
import EditarProduto from './app/containers/ProductContainer'

import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';

import logger from 'redux-logger'

import reducers from './app/reducers'

const store = createStore(reducers,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="home" component={App} />
        <Route path="MeusProdutos" component={MeusProdutos} />
        <Route path="NovoProduto" component={NovoProduto} />
        <Route path="EditarProduto" component={EditarProduto} />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
