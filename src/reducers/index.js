import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer, { totalValue } from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  totalValue,
});

export default rootReducer;
