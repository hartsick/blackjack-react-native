/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux/native'
import App from './src/containers/App';
import reducer from './src/reducers/Reducers';

const store = createStore(reducer);

class Blackjack extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App /> }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Blackjack', () => Blackjack);
