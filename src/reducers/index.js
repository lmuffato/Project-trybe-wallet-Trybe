import { combineReducers } from 'react-redux';
import user from './user';
import wallet from './wallet';

const reducer = combineReducers({ user, wallet });

export default reducer;
