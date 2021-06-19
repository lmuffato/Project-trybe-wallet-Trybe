// Coloque aqui suas actions

export const CREATE_USER = 'CREATE_USER';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';

export function createUser(email) {
  return ({
    type: CREATE_USER,
    payload: {
      email,
    },
  });
}

export function createExpense() {
  return ({
    type: CREATE_EXPENSE,
    payload: {
      currencies: [],
      expenses: [],
    },
  });
}
