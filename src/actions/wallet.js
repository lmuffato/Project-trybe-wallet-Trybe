export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

// action creator que retorna um objeto, que você tem feito até então
const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES });

// outro action creator que retorna um objeto, que você tem feito até então
const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies });

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchCurrencies() {
  return (dispatch) => { // thunk declarado
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(receiveCurrencies(currencies)));
  };
}
