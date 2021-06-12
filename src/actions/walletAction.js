import exchange from '../service/exchange';

export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const EDITE_EXPENSE = 'UEDITE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SAVE_COINS = 'SAVE_COINS';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const GET_COINS = 'GET_COINS';

export const createExpense = (expenses) => ({
  type: CREATE_EXPENSE,
  payload: {
    expenses,
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

export const updateTotal = (value) => ({
  type: UPDATE_TOTAL,
  payload: {
    value,
  },
});

export function getCoins() {
  return async (dispatch) => {
    const coins = await exchange();
    return dispatch(saveCoins(coins));
  };
}
