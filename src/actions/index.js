export const setEmailAction = (email) => ({
  type: 'TYPED_EMAIL',
  payload: {
    email,
  },
});

export const setPasswordAction = (password) => ({
  type: 'TYPED_PASSWORD',
  payload: {
    password,
  },
});

export const emailIsValidAction = () => ({
  type: 'EMAIL_IS_VALID',
});

export const passwordIsValidAction = () => ({
  type: 'PASSWORD_IS_VALID',
});

// Wallet Fetch Actions ............................................................

export const fetchApiSuccess = (payload) => ({
  type: 'FETCH_API_SUCCESS',
  payload: {
    success: payload,
  },
});

export const fetchApiError = (payload) => ({
  type: 'FETCH_API_ERROR',
  payload: {
    error: payload,
  },
});

export const fetchApiThunk = () => async (dispatch) => {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';

  const fetchApi = await fetch(API_URL);
  const resolve = await fetchApi.json();
  const data = await resolve;

  const currencies = Object.keys(data);
  const filteredCurrencies = currencies.filter((currency) => currency !== 'USDT');

  try {
    dispatch(fetchApiSuccess(filteredCurrencies));
  } catch (e) {
    dispatch(fetchApiError(e));
  }
};

// ----------------------------- EXPENSES -----------------------------

export const fetchApiExchangeSuccess = (payload) => ({
  type: 'FETCH_API_EXCHANGE_SUCCESS',
  payload: {
    success: payload,
  },
});

export const fetchApiExchangeError = (payload) => ({
  type: 'FETCH_API_EXCHANGE_ERROR',
  payload: {
    error: payload,
  },
});

export const fetchApiExchangeThunk = () => async (dispatch) => {
  const API_URL = 'https://economia.awesomeapi.com.br/json/all';

  const fetchApi = await fetch(API_URL);
  const resolve = await fetchApi.json();
  const data = await resolve;
  // const { USDT, ...newData } = data;

  try {
    dispatch(fetchApiExchangeSuccess(data));
  } catch (e) {
    dispatch(fetchApiExchangeError(e));
  }
};

export const addExpenseAction = (payload) => ({
  type: 'ADD_EXPENSE',
  payload: {
    expenses: payload,
  },
});

export const increaseCounterAction = (payload) => ({
  type: 'INCREASE_COUNTER',
  payload: {
    counter: payload,
  },
});

export const increaseTotalExpenseAction = (payload) => ({
  type: 'INCREASE_EXPENSE',
  payload: {
    totalValue: payload,
  },
});

export const updateTotalValueAction = (payload) => ({
  type: 'UPDATE_TOTAL_VALUE',
  payload: {
    totalValue: payload,
  },
});

// Wallet Form Actions ............................................................

export const setValorAction = (payload) => ({
  type: 'SET_VALOR',
  payload: {
    valor: payload,
  },
});

export const setTagAction = (payload) => ({
  type: 'SET_TAG',
  payload: {
    tag: payload,
  },
});

export const setMoedaAction = (payload) => ({
  type: 'SET_MOEDA',
  payload: {
    moeda: payload,
  },
});

export const setDescAction = (payload) => ({
  type: 'SET_DESCRICAO',
  payload: {
    descricao: payload,
  },
});

export const setMetodoAction = (payload) => ({
  type: 'SET_METODO',
  payload: {
    metodo: payload,
  },
});
