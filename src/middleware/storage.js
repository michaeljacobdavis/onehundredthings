import { FETCH_ITEMS, ADD_ITEM } from '../action-types/items';
import { set } from '../actions/items';
import items from '../stores/items';

const schedule = (store) => (next) => (action) => {
  const result = next(action);

  switch (action.type) {
    case ADD_ITEM:
      return items.add(action.payload).catch(console.log);
    case FETCH_ITEMS:
      return items.find().then((data) => {
        if (data) {
          store.dispatch(set(data));
        }
      }).catch(console.log);
    default:
      return result;
  }
};

export default schedule;
