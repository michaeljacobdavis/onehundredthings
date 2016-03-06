import { SET_ITEMS, ADD_ITEM, FETCH_ITEMS } from '../action-types/items';

export function set(items) {
  return {
    type: SET_ITEMS,
    payload: items
  };
}

export function add(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

function shouldFetch(state) {
  return !state.items.list;
}

export function fetch() {
  return (dispatch, getState) => {
    if (shouldFetch(getState())) {
      dispatch({
        type: FETCH_ITEMS
      });
    }
  };
}
