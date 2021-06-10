export const IS_FETCHING = 'IS_FETCHING';
export const SEND_EMAIL = 'SEND_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const ADD_EDITED_EXPENSE = 'ADD_EDITED_EXPENSE';

export const isFetching = () => ({
  type: IS_FETCHING,
});

export const sendEmail = (payload) => ({
  type: SEND_EMAIL,
  payload,
});

export const requestCurrencies = (payload) => ({
  type: REQUEST_CURRENCIES,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const addEditedExpense = (payload, id) => ({
  type: ADD_EDITED_EXPENSE,
  payload,
  id,
});

export const fetchCurrency = () => (
  async (dispatch) => {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    try {
      const response = await fetch(url);
      const currencies = await response.json();
      // delete currencies.USDT;
      return dispatch(requestCurrencies(currencies));
    } catch (error) {
      console.log(`Erro na função fetchCurrency: ${error}`);
    }
  }
);
