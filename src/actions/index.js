import { CurrencyAPI } from '../services/api';

export const LOADING = 'LOADING';
export const APISUCCESS = 'APISUCCESS';
export const APIERROR = 'APIERROR';
export const EXPENSE = 'EXPENSE';
export const TOTAL = 'TOTAL';

export const actionSaveTotal = (value) => ({
  type: TOTAL,
  payload: {
    value,
  },
});

export const actionSaveExpense = (value) => ({
  type: EXPENSE,
  payload: {
    data: value,
  },
});

export const actionEmail = (value) => ({
  type: 'email',
  payload: {
    value,
  },
});

export const request = () => ({
  type: LOADING,
});

export const requestSuccess = (payload) => ({
  type: APISUCCESS,
  payload,
});

export const requestError = (payload) => ({
  type: APIERROR,
  payload,
});

export const API_CURRENCY = () => (dispatch) => {
  dispatch(request());
  CurrencyAPI()
    .then((res) => {
      dispatch(requestSuccess(res));
    })
    .catch(() => { requestError(); });
};
