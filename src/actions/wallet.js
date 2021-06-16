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
  return async (dispatch) => { // thunk declarado
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    delete currencies.USDT;
    const currenciesCode = Object.values(currencies);
    return dispatch(receiveCurrencies(currenciesCode));
  };
}
