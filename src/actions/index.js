export const USER_EMAIL = 'USER_EMAIL';
export const emailAction = (payload) => ({ type: USER_EMAIL, payload });

export const WALLET_REQUEST = 'WALLET_REQUEST';
const requestCurrency = () => ({ type: WALLET_REQUEST });

export const WALLET_CURRENCIES = 'WALLET_CURRENCIES';
export const currenciesAction = (payload) => ({ type: WALLET_CURRENCIES, payload });

export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const expensesAction = (payload) => ({ type: WALLET_EXPENSES, payload });

export function requestAPI() {
  return async (dispatch) => {
    dispatch(requestCurrency());
    const endpoit = 'https://economia.awesomeapi.com.br/json/all';
    return fetch(endpoit)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(currenciesAction(data));
      });
  };
}
