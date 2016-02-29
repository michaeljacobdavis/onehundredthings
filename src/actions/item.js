import { ADD_ITEM } from '../action-types/item';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
