import fetchAwesomeApi from '../services/awesomeApi';
import { getUserSuccess } from './user';
import {
  addCurrencies,
  currenciesError,
  currenciesSuccess,
  requestCurrencies,
} from './wallet';

export const getUser = (user) => (dispatch) => {
  dispatch(getUserSuccess(user));
};

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const data = await fetchAwesomeApi();
    const currencies = Object.values(data).filter((currencie) => (
      currencie.codein !== 'BRLT'
    ));

    dispatch(currenciesSuccess(currencies));
  } catch (error) {
    console.log(error);
    dispatch(currenciesError('Erro ao buscar currencies'));
  }
};

export const addExpensesThunk = (state) => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const data = await fetchAwesomeApi();
    const payload = {
      ...state,
      exchangeRates: data,
    };
    dispatch(addCurrencies(payload));
  } catch (error) {
    console.log(error);
    dispatch(currenciesError('Erro ao buscar currencies'));
  }
};
