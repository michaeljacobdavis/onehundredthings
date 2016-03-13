import { Actions } from 'react-native-router-flux';
export const initialState = {
  route: null
};

export default function router(state = initialState, action) {
  switch (action.type) {
    case Actions.AFTER_ROUTE:
    case Actions.AFTER_POP:
      return {
        ...state,
        route: action.route
      };
    default:
      return state;
  }
}
