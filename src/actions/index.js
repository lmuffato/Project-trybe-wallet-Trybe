import getCurrenciesFromAPI from '../services/api';

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

// LOGIN action creator
export const login = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (currenciesList) => ({
  type: GET_CURRENCIES_SUCCESS,
  currenciesList,
});

export const getCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  error,
});

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  getCurrenciesFromAPI()
    .then((res) => {
      const currenciesList = Object.keys(res).filter((curr) => curr !== 'USDT');
      dispatch(getCurrenciesSuccess(currenciesList));
    })
    .catch((error) => {
      getCurrenciesError(error);
    });
};
