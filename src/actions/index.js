export const LOGIN = 'LOGIN';

export const login = (data) => ({
  type: LOGIN,
  payload: {
    data,
  },
});

export const ADD_OUTLAY = 'ADD_OUTLAY';
export const REMOVE_OUTLAY = 'REMOVE_OUTLAY';
export const EDIT_OUTLAY = 'EDIT_OUTLAY';

// const addOutlay = (payload) => ({
//   type: ADD_OUTLAY,
//   payload,
// });
