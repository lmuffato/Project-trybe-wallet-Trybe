import getCurrencies from '../services/currenciesAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const login = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = () => ({
  type: GET_CURRENCIES_ERROR,
});

export const getCurrenciesThunk = () => (dispatch) => {
  (async () => {
    try {
      const allCurrenciesObj = await getCurrencies();
      const allCurrencies = Object.values(allCurrenciesObj)
        .filter((currency) => currency.codein !== 'BRLT');

      dispatch(getCurrenciesSuccess(allCurrencies));
    } catch (err) {
      console.log(err);
      dispatch(getCurrenciesError());
    }
  })();
};
