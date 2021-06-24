import { combineReducers } from 'redux';
import user from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  user,
  wallet: walletReducer,
});

export default rootReducer;
