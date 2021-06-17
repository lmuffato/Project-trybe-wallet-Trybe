export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  email,
});

// Course 16.3
// action creator que retorna um objeto
export const ASK_CURRENCY = 'ASK_CURRENCY';
const askCurrency = () => ({
  type: ASK_CURRENCY });

// outro action creator que retorna um objeto
export const GET_CURRENCY = 'GET_CURRENCY';
const getCurrency = (currency) => ({
  type: GET_CURRENCY,
  currency });

// action creator que retorna uma função, possível por conta do pacote redux-thunk
// daqui, envio a função (requisição da API) para o reducers
export function fetchCurrency() {
  return (dispatch) => {
    dispatch(askCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(getCurrency(currency)));
  };
}

// outro action creator que retorna um objeto
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

// pega novamente a API e faz um dispatch para usar no comp. Header e Forms
export const expensesAdd = (state) => async (dispatch) => {
  const exchangeRates = await fetchCurrency();
  const expenses = {
    ...state,
    exchangeRates,
  };
  dispatch(addExpense(expenses));
}; // exchangeRates é a chave q vai guardar o valor retornado pela API
