import reduceReducers from 'reduce-reducers';
import userReducer from './user';
import walletReducer from './wallet';
import apiReducer from './api';

const INITIAL_STATE = {
  user: { email: '' },
  wallet: {
    currencies: [],
    expenses: [],
  },
  isFetching: false,
};

const rootReducer = reduceReducers(INITIAL_STATE, userReducer, walletReducer, apiReducer);

export default rootReducer;
