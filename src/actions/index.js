import currencyAPI from '../services/api';

// Coloque aqui suas actions
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';

export const userLoginSucess = (payload) => ({
  type: USER_LOGIN_SUCESS,
  payload,
});

export const walletLoading = () => ({
  type: LOAD_CURRENCIES,
});

export const walletAddCurrencie = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});
export const walletAddExpense = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});
export const currencyAPIThunk = () => (dispatch) => {
  // is loading true
  dispatch(walletLoading());
  // chama a api
  currencyAPI()
    .then((res) => {
      // deu certo a chamada da api
      dispatch(walletAddCurrencie({
        currencies: res,
      }));
    });
};
