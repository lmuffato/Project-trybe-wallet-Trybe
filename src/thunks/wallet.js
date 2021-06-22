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
  addNewExpense: (getExpense) => async (dispatch) => {
    const exchanges = await fetchExchangeRates();
    await dispatch(getExchangeRates(exchanges));
    if (getExpense()) {
      await dispatch(dispatchNewExpense(getExpense()));
      await dispatch(updateTotal());
      // await sumTotal();
    }
  },
  removeExpense: (expenseId) => async (dispatch) => {
    await dispatch(dispatchRemoveExpense(expenseId));
    // await sumTotal();
  },
};

export default walletThunks;
