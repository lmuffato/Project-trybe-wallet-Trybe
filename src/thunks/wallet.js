import fetchExchangeRates from '../helpers/fetchExchangeRates';
import {
  getExchangeRates,
  dispatchNewExpense,
  updateTotal,
  dispatchRemoveExpense,
} from '../actions';

const walletThunks = {
  getExchangeRates: () => (dispatch) => {
    fetchExchangeRates().then((data) => dispatch(getExchangeRates(data)));
  },
  addNewExpense: (getExpense, sumTotal) => async (dispatch) => {
    const exchanges = await fetchExchangeRates();
    await dispatch(getExchangeRates(exchanges));
    if (getExpense()) {
      await dispatch(dispatchNewExpense(getExpense()));
      await dispatch(updateTotal());
      sumTotal();
    }
  },
  removeExpense: (expenseId) => async (dispatch) => {
    await dispatch(dispatchRemoveExpense(expenseId));
  },
};

export default walletThunks;
