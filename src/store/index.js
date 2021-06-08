import { createStore } from 'redux';
import rootReducer from '../reducers';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
