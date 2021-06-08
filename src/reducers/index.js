import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;
// (state = 0, action) => {
//     switch(action.type){
//         case "LOGIN":
//             return state;
//         default:
//             return state;
//     }
// }
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
