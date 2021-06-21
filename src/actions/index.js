// Coloque aqui suas actions

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const LIST_COINS = 'LIST_COINS';

export function saveEmail(email) {
  return ({
    type: SAVE_EMAIL,
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

export function listCoins(coins) {
  return ({
    type: LIST_COINS,
    payload: {
      coins,
    },
  });
}
