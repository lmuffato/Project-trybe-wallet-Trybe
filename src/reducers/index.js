// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

// {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: []
//   }
// }

import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducers = combineReducers({ userReducer, walletReducer });

export default rootReducers;
