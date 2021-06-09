import user from './user';
import wallet from './wallet';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
