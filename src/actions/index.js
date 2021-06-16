export const LOGIN = 'LOGIN';

// export const userName = (email, password) => ({
//   type: LOGIN,
//   payload: {
//     email,
//     password,
//   },
// });

export const userName = (email) => ({
  type: LOGIN,
  payload: email,
});

// export const ADD_OUTLAY = 'ADD_OUTLAY';
// export const REMOVE_OUTLAY = 'REMOVE_OUTLAY';
// export const EDIT_OUTLAY = 'EDIT_OUTLAY';

// const addOutlay = (payload) => ({
//   type: ADD_OUTLAY,
//   payload,
// });

// const removeOutlay = (payload) => ({
//   type: REMOVE_OUTLAY,
//   payload,
// });

// const editOutlay = (payload) => ({
//   type: EDIT_OUTLAY,
//   payload,
// });
