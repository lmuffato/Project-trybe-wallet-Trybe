import fetchAwesomeApi from '../services/awesomeApi';
import { getUserSuccess } from './user';
import { currenciesError, currenciesSuccess, requestCurrencies } from './wallet';

export const getUser = (user) => (dispatch) => {
  dispatch(getUserSuccess(user));
};

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const data = await fetchAwesomeApi();

    dispatch(currenciesSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(currenciesError('Erro ao buscar currencies'));
  }
};
