// import {
//   VISUALIZA_GASTO_TOTAL,
//   ADD_GASTO,
//   REMOVE_GASTO,
//   EDITAR_GASTO } from '../actions';

// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// const INITIAL_STATE = {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: [],
//   },
// };

// const walletReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case ADD_GASTO:
//     return {
//       ...state,
//       currencies: state.currencies.concat(action.payload.wallet),
//       expenses: [],
//     };
//   case REMOVE_GASTO:
//     return {
//       ...state,
//     };
//   case EDITAR_GASTO:
//     return {
//       ...state,
//     };
//   case VISUALIZA_GASTO_TOTAL:
//     return {
//       ...state,
//     };
//   default:
//     return state;
//   }
// };

// export default walletReducer;
