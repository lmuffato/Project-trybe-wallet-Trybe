import fetchAPI from '../services/currencyfetch';

export const LOGIN = 'LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_TOTAL = 'GET_TOTAL';

const login = (payload) => ({
  type: LOGIN,
  payload,
});

const addCurrency = (payload) => ({
  type: ADD_CURRENCY,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const getTotal = (payload) => ({
  type: GET_TOTAL,
  payload,
});

export const fetchAPIThunk = () => (dispatch) => {
  fetchAPI().then((res) => {
    dispatch(addCurrency({
      currencies: res,
    }));
  });
};

// Ref. do delete: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// Lógica abaixo do novo fetch para o req. 08 implementada com a ajuda de Gabriel Pereira
// Link github: https://github.com/tryber/sd-010-a-project-trybewallet/pull/85

export const fetchCurrencyAPI = (state) => async (dispatch) => {
  try {
    let initialValue = 0;
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const getResponse = await fetchApi.json();
    delete getResponse.USDT;
    const filterValues = Object.values(getResponse)
      .filter((currNick) => state.currency === currNick.code);
    const saveFilter = filterValues.map((coin) => state.value * coin.ask);
    initialValue += parseFloat(saveFilter).toFixed(2);
    dispatch(addExpense({ ...state, exchangeRates: getResponse }));
    dispatch(getTotal(parseFloat(initialValue)));
  } catch (error) { console.log('Erro! A moeda não foi encontrada'); }
};

export default login;
