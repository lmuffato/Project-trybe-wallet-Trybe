export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  email,
});

// Course 16.3
// action creator que retorna um objeto
export const ASK_CURRENCY = 'SAVE_CURRENCY';
const askCurrency = () => ({
  type: ASK_CURRENCY });

// outro action creator que retorna um objeto
export const GET_CURRENCY = 'GET_CURRENCY';
const getCurrency = (currency) => ({
  type: GET_CURRENCY,
  currency });

// action creator que retorna uma função, possível por conta do pacote redux-thunk
// daqui, envio a função para o reducers
export function fetchCurrency() {
  return (dispatch) => {
    dispatch(askCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(getCurrency(currency)));
  };
}
