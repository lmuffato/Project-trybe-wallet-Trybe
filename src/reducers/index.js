import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import inputValues from './inputValues';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducers = combineReducers({
  user,
  wallet,
  inputValues,
});

export default rootReducers;
