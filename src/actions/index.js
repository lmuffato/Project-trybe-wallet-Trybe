// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CHOICED_PRODUCT = 'GET_CHOICED_PRODUCT';

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

export const choicedProduct = ({ id, valor, descricao, moeda, metodo, categoria }) => ({
  type: GET_CHOICED_PRODUCT,
  product: {
    id,
    value: valor,
    description: descricao,
    currency: moeda,
    method: metodo,
    tag: categoria,
  },
});
