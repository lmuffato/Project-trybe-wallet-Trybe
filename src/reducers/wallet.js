// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import {
//   ADD_OUTLAY,
//   REMOVE_OUTLAY,
//   EDIT_OUTLAY,
// } from '../actions';

// const INITIAL_STATE = {
//   currencies: [],
//   expenses: [],
//   totalExpended: '',
// };

// function wallet(state = INITIAL_STATE, action) {
//   switch (action.type) {
//   case ADD_OUTLAY:
//     return { ...state,
//       currencies: [...state.wallet, action.payload.currencies],
//       expenses: [...state.wallet.expenses, action.payload.expenses],
//       totalExpended: state.wallet.totalExpended + action.payload.expended,
//     };
//   case REMOVE_OUTLAY:
//     return state;
//   case EDIT_OUTLAY:
//     return state;
//   default:
//     return state;
//   }
// }

// export default wallet;
