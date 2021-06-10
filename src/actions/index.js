import { getCurrences } from '../services/currencesApi';

export const LOGIN = 'LOGIN';
export const GET_CURRENCES_LOADING = 'GET_CURRENCES_LOADING';
export const GET_CURRENCES_SUCCESS = 'GET_CURRENCES_SUCCESS';
export const GET_CURRENCES_ERROR = 'GET_CURRENCES_ERROR';

export const sendLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrencesLoading = () => ({
  type: GET_CURRENCES_LOADING,
});

export const getCurrencesSuccess = (code) => ({
  type: GET_CURRENCES_SUCCESS,
  code,
});

export const getCurrencesError = (error) => ({
  type: GET_CURRENCES_ERROR,
  error,
});

export const getCurrencesThunk = () => (dispatch) => {
  dispatch(getCurrencesLoading());

  getCurrences()
    .then((res) => {
      delete res.USDT;
      dispatch(getCurrencesSuccess(res));
    })
    .catch(() => {
      console.log(getCurrencesError());
      dispatch(getCurrencesError());
    });
};
