import getCurrencies from '../services/currenciesAPI';

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';
export const EDITING_SUCCESS = 'EDITING_SUCCESS';
export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_RAW_CURRENCIES = 'GET_RAW_CURRENCIES';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
// export const SELECT_EXPENSE = 'SELECT_EXPENSE';

export const login = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});

export const startEditingExpense = (payload) => ({
  type: START_EDITING,
  payload,
});

export const stopEditingExpense = () => ({
  type: STOP_EDITING,
});

export const editingExpenseSuccess = (payload) => ({
  type: EDITING_SUCCESS,
  payload,
});

// export const selectExpense = (payload) => ({
//   type: SELECT_EXPENSE,
//   payload,
// });

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getRawCurrencies = (payload) => ({
  type: GET_RAW_CURRENCIES,
  payload,
});

export const getCurrenciesError = () => ({
  type: GET_CURRENCIES_ERROR,
});

export const getCurrenciesThunk = (current = false) => async (dispatch) => {
  try {
    const allCurrenciesObj = await getCurrencies();
    // Delete operator consultado em:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
    delete allCurrenciesObj.USDT;
    const allCurrencies = Object.keys(allCurrenciesObj);

    if (!current) {
      dispatch(getCurrenciesSuccess(allCurrencies)); // return aqui?
    } else {
      dispatch(getRawCurrencies(allCurrenciesObj));
    }
  } catch (err) {
    console.log(err);
    dispatch(getCurrenciesError());
  }
};

// export const editExpenseThunk = (payload) => (dispatch) => {
//   dispatch(removeExpense(payload.index));
//   dispatch(editingExpenseSuccess(payload.editedExpense));
// };
