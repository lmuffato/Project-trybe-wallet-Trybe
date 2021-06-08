export const IS_FETCHING = 'IS_FETCHING';
export const SEND_EMAIL = 'SEND_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const TOTAL_VALUE = 'TOTAL_VALUE';

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

export const totalValue = (payload) => ({
  type: TOTAL_VALUE,
  payload,
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
