import React, { AppRegistry } from 'react-native';
import App from './containers/App';
import ListPage from './containers/ListPage';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

export default function native() {
  const Entry = () => {
    const store = configureStore();
    return (
      <Provider store={store}>
        <App>
          <ListPage />
        </App>
      </Provider>
    );
  };

  AppRegistry.registerComponent('onehundredthings', () => Entry);
}
