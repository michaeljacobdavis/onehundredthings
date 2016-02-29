import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import devTools from 'remote-redux-devtools'; // TODO: Remove for prod

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools() // TODO: Remove for prod
  );

  return createStore(reducer, initialState, enhancer);
}
