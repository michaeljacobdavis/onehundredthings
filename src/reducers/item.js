export const initialState = {
  name: '',
  added: null,
  image: null,
  importance: null
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
