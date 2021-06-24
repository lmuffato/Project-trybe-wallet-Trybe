// Coloque aqui suas actions

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const LIST_COINS = 'LIST_COINS';
export const SUM_EXPENSES = 'SUM_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export function saveEmail(email) {
  return ({
    type: SAVE_EMAIL,
    payload: {
      email,
    },
  });
}

export function createExpense(expense) {
  return ({
    type: CREATE_EXPENSE,
    payload: {
      expense,
    },
  });
}

export function sumExpenses(expenses) {
  return ({
    type: SUM_EXPENSES,
    payload: {
      expenses,
    },
  });
}

export function listCoins(coins) {
  return ({
    type: LIST_COINS,
    payload: {
      coins,
    },
  });
}

export function deleteExpense(expense) {
  return ({
    type: DELETE_EXPENSE,
    payload: {
      expense,
    },
  });
}
