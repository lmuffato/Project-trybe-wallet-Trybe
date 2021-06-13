export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const fetchCurrencies = () => ({
  type: FETCH_CURRENCIES,
});

export const fetchCurrenciesSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  currencies,
});

export const fetchCurrenciesError = (payload) => ({
  type: FETCH_CURRENCIES_ERROR,
  payload,
});

export const currenciesAPI = async () => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetchAPI.json();
  return response;
};

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(fetchCurrencies());
  currenciesAPI()
    .then((res) => {
      dispatch(fetchCurrenciesSuccess(res));
    })
    .catch(() => { dispatch(fetchCurrenciesError()); });
};
