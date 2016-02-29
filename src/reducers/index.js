import { combineReducers } from 'redux';
import item from './item';
import items from './items';

const rootReducer = combineReducers({
  items,
  item
});

export default rootReducer;
