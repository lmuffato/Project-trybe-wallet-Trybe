import api from '../service/api';

export const START_FETCH = 'START_FETCH';
export const USER_WALLET = 'USER_WALLET';
export const WALLET_CURRENCIES = 'WALLET_CURRENCIES';
export const WALLET_EXPENSES = 'WALLET_EXPENSES';
export const COUNT_ID = 'COUNT_ID';
export const DELETE_ROW = 'DELETE_ROW';

export const startFetch = () => ({
  type: START_FETCH,
});

export const saveUser = (email) => ({
  type: USER_WALLET,
  email,
});

export const saveWalletCurrencies = (data) => ({
  type: WALLET_CURRENCIES,
  data,
});

export const saveWalletExpencies = (coins) => ({
  type: WALLET_EXPENSES,
  coins,
});

export const incrementCount = () => ({
  type: COUNT_ID,
});

export const deleteElementTable = (obj) => ({
  type: DELETE_ROW,
  obj,
});

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(startFetch());
    const data = await api();
    dispatch(saveWalletCurrencies(data));
  };
}

// referência: https://github.com/tryber/sd-010-a-project-trybewallet/pull/108/files
