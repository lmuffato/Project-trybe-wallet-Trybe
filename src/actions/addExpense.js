import getAPI from '../services/API';
import { ADD_EXPENSE } from '.';

const success = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

const fetchPrices = (expense) => async (dispatch) => {
  const exchangeRates = await getAPI();
  const setExpense = { ...expense, exchangeRates };
  dispatch(success(setExpense));
};

export default fetchPrices;
