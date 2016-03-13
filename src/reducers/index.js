import { combineReducers } from 'redux';
import items from './items';
import router from './router';

const rootReducer = combineReducers({
  router,
  items
});

export default rootReducer;
