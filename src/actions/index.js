export const LOGIN = 'LOGIN';

export const userName = (email) => ({
  type: LOGIN,
  payload: email,
});

export const SHOW = 'SHOW';

export const shouldShowTable = (payload) => ({
  type: SHOW,
  payload,
});

export const ADD_OUTLAY = 'ADD_OUTLAY';
export const REMOVE_OUTLAY = 'REMOVE_OUTLAY';
// export const EDIT_OUTLAY = 'EDIT_OUTLAY';

export const addOutlay = (data) => ({
  type: ADD_OUTLAY,
  expenses: data,
});

export const removeOutlay = (expense) => ({
  type: REMOVE_OUTLAY,
  payload: {
    expense,
  },
});

// export const editOutlay = (outLay) => ({
//   type: EDIT_OUTLAY,
//   outLay,
// });

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const RECEIVED_CURRENCY = 'RECEIVED_CURRENCY';
const receivedCurrency = (currency) => ({
  type: RECEIVED_CURRENCY,
  currencies: currency });

export function fetchCurrencyExchange() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receivedCurrency(currency)));
  };
}
