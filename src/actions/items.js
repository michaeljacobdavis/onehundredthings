import { SET_ITEMS } from '../action-types/items';

export function setItems(items) {
  return {
    type: SET_ITEMS,
    payload: items
  };
}
