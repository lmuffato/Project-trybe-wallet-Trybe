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

export const getCurrenciesListSuccess = (currenciesList) => ({
  type: GET_CURRENCIES_LIST_SUCCESS,
  currenciesList,
});

export const getCurrenciesListError = (error) => ({
  type: GET_CURRENCIES_LIST_ERROR,
  error,
});

export const getCurrenciesDataSuccess = (currenciesData) => ({
  type: GET_CURRENCIES_DATA_SUCCESS,
  currenciesData,
});

export const getCurrenciesDataError = (error) => ({
  type: GET_CURRENCIES_DATA_ERROR,
  error,
});

export const getCurrenciesListThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  getCurrenciesFromAPI()
    .then((res) => {
      const currenciesList = Object.keys(res).filter((curr) => curr !== 'USDT');
      dispatch(getCurrenciesListSuccess(currenciesList));
    })
    .catch((error) => {
      getCurrenciesListError(error);
    });
};

export const getCurrenciesDataThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  getCurrenciesFromAPI()
    .then((res) => {
      console.log(res);
      // dispatch(getCurrenciesDataSuccess(res));
    })
    .catch((error) => {
      console.log(error);
      // getCurrenciesDataError(error);
    });
};
