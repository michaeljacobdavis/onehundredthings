import { ADD_ITEM, SET_ITEMS, UPDATE_ITEM } from '../action-types/items';

export const initialState = [];

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.payload
      ];
    case UPDATE_ITEM:
      return [
        ...state.filter((item) => item._id !== action.payload._id),
        action.payload
      ];
    case SET_ITEMS:
      return [
        ...action.payload
      ];
    default:
      return state;
  }
}
