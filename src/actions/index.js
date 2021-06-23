import getCurrencies from '../serveces/fetchApis';

export const GET_CURRENCIES_API = 'GET_CURRENCIES_API';
export const GET_CURRENCIES_API_SUCCESS = 'GET_CURRENCIES_API_SUCCESS';
export const GET_CURRENCIES_API_ERROR = 'GET_CURRENCIES_API_ERROR';

export const getCURRENCIESApi = (payload) => (
  { type: GET_CURRENCIES_API, payload }
);

export const getCURRENCIESApiSuccess = (payload) => (
  { type: GET_CURRENCIES_API_SUCCESS, payload }
);

export const getCURRENCIESApiError = (payload) => (
  { type: GET_CURRENCIES_API_ERROR, payload }
);

export const getCURRENCIESApiThunk = () => (dispatch) => {
  dispatch(getCURRENCIESApi());
  getCurrencies()
    .then((res) => {
      // console.log(res);
      const { USDT, ...currencies } = res;
      // const currencies = Object.keys(currenciesApi);
      // console.log(currencies);
      dispatch(getCURRENCIESApiSuccess({ currencies }));
    })
    .catch(() => { getCURRENCIESApiError(); });
};

export const LOGIN = 'LOGIN';

export const login = (payload) => (
  { type: LOGIN, payload }
);

export const WALLET = 'WALLET';

export const wallet = (payload) => (
  { type: WALLET, payload }
);
