import getCurrency from '../services/FetchApi';

// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_CURRENCY_SUCCESS = 'ADD_CURRENCY_SUCCESS';
export const ADD_RECORD_WALLET = 'ADD_RECORD_WALLET';
export const ADD_RECORD_SUCCESS = 'ADD_RECORD_SUCCESS';
export const DEL_RECORD = 'DEL_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';

export const addUser = (payload) => ({ type: ADD_USER, payload });

export const addCurrency = (payload) => ({ type: ADD_CURRENCY, payload });

export const addCurrencySuccess = (payload) => ({ type: ADD_CURRENCY_SUCCESS, payload });

export const addRecordWallet = (payload) => ({ type: ADD_RECORD_WALLET, payload });

export const addRecordSuccess = (payload) => ({ type: ADD_RECORD_SUCCESS, payload });

export const delRecord = (payload) => ({ type: DEL_RECORD, payload });

export const editRecord = (payload) => ({ type: EDIT_RECORD, payload });

export const addCurrencyApiThunk = () => (dispatch) => {
  dispatch(addCurrency());
  getCurrency()
    .then((response) => {
      const { USDT, ...currencyAPI } = response;
      // const returnAPI = Object.keys(currencyAPI);
      // console.log(returnAPI);
      // returnAPI.splice(1, 1);
      dispatch(addCurrencySuccess(currencyAPI));
    });
};
