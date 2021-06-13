import exchange from '../service/exchange';

export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const EDITE_EXPENSE = 'UEDITE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SAVE_COINS = 'SAVE_COINS';
export const SUM_TOTAL = 'SUM_TOTAL';
export const GET_COINS = 'GET_COINS';

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

export const saveCoins = (currencies) => ({
  type: SAVE_COINS,
  payload: {
    currencies,
  },
});

export const sumTotal = (total) => ({
  type: SUM_TOTAL,
  payload: {
    total,
  },
});

// Thunk
export function getCoins() {
  return async (dispatch) => {
    const currencies = await exchange();
    return dispatch(saveCoins(currencies));
  };
}
