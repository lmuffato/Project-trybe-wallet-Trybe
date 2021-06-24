import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import table from './table';

const rootReducer = combineReducers({
  user,
  wallet,
  table,
});

export default rootReducer;
