// const outlay = () => {
//   return {
//     type: 'ADD_OUTLAY',
//     type: 'REMOVE_OUTLAY',
//     type: 'EDIT_OUTLAY',
//   };
// };

export const LOGIN = 'LOGIN';

const login = () => ({
  type: LOGIN,
  payload,
});
//

export const ADD_OUTLAY = 'ADD_OUTLAY';
export const REMOVE_OUTLAY = 'REMOVE_OUTLAY';
export const EDIT_OUTLAY = 'EDIT_OUTLAY';

const addOutlay = (payload) => ({
  type: ADD_OUTLAY,
  payload,
});
