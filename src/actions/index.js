// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';

export const loginData = (email) => ({
  type: VALID_EMAIL,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  currencies,
});

export function fetchCurrenciesThunk() {
  return async (dispatch) => {
    const fetchCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesJson = await fetchCurrencies.json();
    const arrayCurrencies = Object.keys(currenciesJson);
    const arrayCurrenciesFilter = arrayCurrencies
      .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');
    dispatch(getCurrencies(arrayCurrenciesFilter));
  };
}
