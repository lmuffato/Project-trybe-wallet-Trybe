export const USER = 'USER';
export const WALLET = 'WALLET';
export const API_SUCESSED = 'API_SUCESSED';
export const API_FAIL = 'API_FAIL';

export const user = (payload) => ({
  type: USER,
  payload,
});

export const wallet = () => ({
  type: WALLET,
});

export const apiSucessed = (payload) => ({
  type: API_SUCESSED,
  payload,
});

export const apiFail = (payload) => ({
  type: API_FAIL,
  payload,
});

export const getExchange = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  return json;
};

export const apiCurrencyThunk = () => async (dispatch) => {
  dispatch(wallet());
  try {
    const getEx = await getExchange();
    dispatch(apiSucessed(getEx));
  } catch (error) {
    dispatch(apiFail(error));
  }
  // return fetch('https://economia.awesomeapi.com.br/json/all')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     dispatch(apiSucessed(data));
  //   })
  //   .catch((error) => dispatch(apiFail(error)));
};
