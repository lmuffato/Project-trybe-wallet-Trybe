// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

const loginActionCreator = (data) => ({
  type: USER_LOGIN,
  payload: data,
});

export default loginActionCreator;
