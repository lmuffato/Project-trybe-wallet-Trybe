import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import edit from './edit';

const reducer = combineReducers({
  user,
  wallet,
  edit,
});

export default reducer;
