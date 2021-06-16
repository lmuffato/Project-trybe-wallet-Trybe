// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const TOTAL_VALUE = 'TOTAL_VALUE';
export const LOADING_REQUEST = 'LOADING_REQUEST';
export const ERROR_REQUEST = 'ERROR_REQUEST';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const EXPENSES_SUCESS = 'EXPENSES_SUCESS';

// action creator > funcao que retorna uma action
// LOGIN
export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

// REQUEST_COINS

// função de chamada a API
const URL = 'https://economia.awesomeapi.com.br/json/all';

export const loadingRequest = () => ({
  type: 'LOADING_REQUEST',
});

export const errorRequest = (error) => ({
  type: 'ERROR_REQUEST',
  error,
});

export const successRequest = (realValueCoins) => ({
  type: 'SUCCESS_REQUEST',
  realValueCoins,
});

export const ThunkAPI = () => (dispatch) => {
  dispatch(loadingRequest());

  return fetch(URL)
    .then((response) => (response.json()))
    .then((data) => {
      const valuesCoins = Object.values(data);
      const realValueCoins = valuesCoins.map((coin) => (
        coin.code
      ));
      realValueCoins.splice(1, 1);
      dispatch(successRequest(realValueCoins));
    })
    .catch((error) => dispatch(errorRequest(error)));
};

// Referencia uso do splice: https://pt.stackoverflow.com/questions/108032/remover-um-elemento-especifico-do-array-javascript;

// API 2, PARA REGISTRO DE ADIÇÃO DE DESPESAS

export const actionExpenses = (expensesInfo) => ({
  type: 'EXPENSES_SUCESS',
  expensesInfo,
});

export const actionThunkAdd = (payload) => (dispatch) => {
  // payload vem do form, com estado e com ID
  fetch(URL)
    .then((respo) => (respo.json()))
    .then((info) => {
      // juntar em uma variavel o payload e o retorno da api
      const expensesInfo = { ...payload, exchangeRate: { ...info } };
      dispatch(actionExpenses(expensesInfo));
    });
};
