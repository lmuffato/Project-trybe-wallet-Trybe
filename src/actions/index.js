// Coloque aqui suas actions

// User actions for Login

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
  type: 'SET_DESC',
  payload: {
    desc: payload,
  },
});

export const setMetodoAction = (payload) => ({
  type: 'SET_METODO',
  payload: {
    metodo: payload,
  },
});
