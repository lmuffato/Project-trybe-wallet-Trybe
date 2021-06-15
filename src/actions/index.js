export const GET_EMAIL = 'GET_EMAIL';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrency(currency)));
  };
}
