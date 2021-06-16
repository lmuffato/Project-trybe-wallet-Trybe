// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const TOTAL_VALUE = 'TOTAL_VALUE';
export const LOADING_REQUEST = 'LOADING_REQUEST';
export const ERROR_REQUEST = 'ERROR_REQUEST';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';

// action creator > funcao que retorna uma action
// LOGIN
export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

// TOTAL_VALUE
export const totalValueAction = (payload) => ({
  type: TOTAL_VALUE,
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
      console.log(valuesCoins);
      const realValueCoins = valuesCoins.map((coin) => (
        coin.code
      ));
      realValueCoins.splice(1, 1);
      console.log('realValueCoins in action');
      console.log(realValueCoins);
      dispatch(successRequest(realValueCoins));
    })
    .catch((error) => dispatch(errorRequest(error)));
};

// Referencia uso do splice: https://pt.stackoverflow.com/questions/108032/remover-um-elemento-especifico-do-array-javascript;
