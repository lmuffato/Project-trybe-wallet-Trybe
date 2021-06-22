import { combineReducers } from 'redux';
import user from './user';
import getWallet from './wallet';

const rootReducer = combineReducers({
  user,
  getWallet,
});

export default rootReducer;
