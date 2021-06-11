export const USER_LOGIN = 'USER_LOGIN';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const EDITE_EXPENSE = 'UEDITE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

//           ACTIONS FROM LOGIN           //
export const userLogin = (email, password) => ({
  type: 'USER_LOGIN',
  payload: {
    email,
    password,
  },
});

//           ACTIONS FROM WALLET           //

export const createExpense = (expense) => ({
  type: CREATE_EXPENSE,
  payload: {
    expense,
  },
});

export const editeExpense = (id) => ({
  type: EDITE_EXPENSE,
  payload: {
    id,
  },
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: {
    id,
  },
});
