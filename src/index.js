import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import AppReducer from './reducers';
import Router from './screens'

export default class App extends Component {
  store = createStore(
    AppReducer,
    applyMiddleware(thunk),
    applyMiddleware(logger)
  );

  render() {
    return (
      <Provider store={this.store}>
        <Router />
      </Provider>
    );
  }
}
