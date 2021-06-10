export const VALID_EMAIL = 'VALID_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const validEmail = (payload) => ({ type: VALID_EMAIL, payload });

const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });
const receiveCurrencies = (currencies) => ({ type: RECEIVE_CURRENCIES, currencies });

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json())
      .then((currencies) => dispatch(receiveCurrencies(currencies)));
  };
}
