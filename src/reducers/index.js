import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import wallet2 from './wallet2';

const rootReducer = combineReducers({
  user,
  wallet,
  wallet2,
});

export default rootReducer;
