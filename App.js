import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import AppContainer from './components/AppContainer'
import reducer from './reducers'

const loggerMiddlware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddlware,
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('textadventure', () => App);
