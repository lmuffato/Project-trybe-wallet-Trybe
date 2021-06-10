import { getCoinsFromApi, deleteUSDT } from '../services/apiCoins';

export const ADD_USER = 'ADD_USER';
export const REQUEST_COINS = ' REQUEST_COINS';
export const ADD_COINS = 'ADD_COINS';
export const COINS = 'COINS';

export const addUser = (email) => ({
  type: ADD_USER,
  payload: {
    email,
  },
});

export const addCoins = (payload) => ({
  type: ADD_COINS,
  payload,
});

export const getCoinsThunk = () => async (dispatch) => {
  const response = await getCoinsFromApi();
  const coinsFiltered = deleteUSDT(response);
  dispatch(addCoins(coinsFiltered));
};
