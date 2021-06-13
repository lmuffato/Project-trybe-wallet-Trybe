import fetchCurrencies from '../helpers/fetchCurrencies';
import { getCurrencies } from '../actions';

const walletThunks = {
  getCurrencies: () => (dispatch) => {
    fetchCurrencies().then((currencies) => dispatch((getCurrencies(currencies))));
  },
};

export default walletThunks;
