// import wallet from './wallet';

import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  login: user,
});
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
/*
export default combineReducers({
  form: reduxFormReducer,
});
*/
export default rootReducer;
