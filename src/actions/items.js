import { SET_ITEMS, ADD_ITEM } from '../action-types/items';

export function setItems(items) {
  return {
    type: SET_ITEMS,
    payload: items
  };
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
