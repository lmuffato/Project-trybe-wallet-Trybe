import fetchApi from '../services/fetchApi';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const saveEmail = (email) => (
  { type: SAVE_EMAIL, email });

export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const saveExpense = (expense, changeRates) => (
  { type: SAVE_EXPENSE, expense, changeRates }
);

export const REMOVE_EXPENSE = 'DEL_EXPENSE';
export const removeExpense = (payload) => (
  { type: REMOVE_EXPENSE, payload }
);

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchStart = () => (
  { type: FETCH_START }
);

export const fetchSuccess = (payload) => (
  { type: FETCH_SUCCESS, payload }
);

export const fetchError = (payload) => (
  { type: FETCH_ERROR, payload }
);

const thunkFetch = () => (dispatch) => {
  dispatch(fetchStart());
  fetchApi()
    .then(
      (data) => dispatch(fetchSuccess(data)),
      (error) => dispatch(fetchError(error.message)),
    );
};

export const thunkFetchExchangeRates = (inputForm) => (dispatch) => {
  dispatch(fetchStart());
  fetchApi()
    .then((data) => {
      if (data.USDT) {
        delete data.USDT;
      }
      dispatch(saveExpense(inputForm, data));
    })
    .catch((error) => dispatch(fetchError(error.message)));
};

export default thunkFetch;
