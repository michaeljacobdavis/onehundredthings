import React, {
  AppRegistry
} from 'react-native';
import Router from './Router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

export default function native() {
  const Entry = () => {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  };

  AppRegistry.registerComponent('onehundredthings', () => Entry);
}
