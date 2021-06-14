import fetchExchangeRates from '../helpers/fetchExchangeRates';
import { getExchangeRates } from '../actions';

const walletThunks = {
  getExchangeRates: () => (dispatch) => {
    fetchExchangeRates().then((data) => dispatch((getExchangeRates(data))));
  },
};

export default walletThunks;
