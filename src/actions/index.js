export const GET_EMAIL = 'GET_EMAIL';

export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrency(currency)));
  };
}

// export function fetchExpenses(expenses) {
//   return (dispatch) => (
//     fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((response) => response.json())
//       .then((currency) => dispatch(saveExpenses(expenses, currency)))
//   );
// }

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';

export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';

export const requestExpenses = () => ({
  type: REQUEST_EXPENSES,
});

export const receiveExpenses = (payload) => ({
  type: RECEIVE_EXPENSES,
  payload,
});

const fetchExpense = async () => {
  const fetchExp = await fetch('https://economia.awesomeapi.com.br/json/all');
  const fetchExp2 = fetchExp.json();
  return fetchExp2;
};

export const fetchExpenses = (value) => (dispatch) => {
  dispatch(requestExpenses());
  fetchExpense().then((expense) => {
    const xablau = { ...value, exchangeRates: { ...expense } };
    dispatch(receiveExpenses(xablau));
  });
};
