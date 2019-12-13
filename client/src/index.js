import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middleWare = [reduxPromise, reduxThunk];

export const theStore = applyMiddleware(...middleWare)(createStore)(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);