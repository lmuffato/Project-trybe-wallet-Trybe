// Coloque aqui suas actions
const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export function fetchCoins() {
  return (dispatch) => (
    fetch(apiUrl)
      .then((response) => response.json()
        .then((currencies) => dispatch(getCurrencies(currencies))))
  );
}

const loginActionCreator = (data) => ({
  type: USER_LOGIN,
  payload: data,
});

export default loginActionCreator;
