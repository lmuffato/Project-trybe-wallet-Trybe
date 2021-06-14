import INITIAL_STATE from '../constants/INITIAL_STATE';
import ACTIONS from '../constants/actions';

const walletReducer = (state = INITIAL_STATE.wallet, action) => {
  const { type, data, expense } = action;
  switch (type) {
  case ACTIONS.GET_EXCHANGE_RATES:
    return {
      ...state,
      exchangeRates: { ...state.exchangeRates, ...data },
      currencies: [
        ...Object.values(data).map((obj) => obj.code),
      ],
    };
  case ACTIONS.ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, expense] };
  default:
    return state;
  }
};

export default walletReducer;
