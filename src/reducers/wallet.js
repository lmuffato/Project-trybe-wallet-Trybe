// // Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// const INITIAL_STATE = {
//   currencies: [],
//   expenses: [],
// };

// export default function wallet(state = INITIAL_STATE, action) {
//   switch (action.type) {
//   case '':
//     return state;
//   default:
//     return state;
//   }
// }
const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EXPENSE':
    return { expenses: [...state.expenses, action.payload.expense] };
  case 'DEL_EXPENSE':
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload.expense.id),
      ],
    };
  default:
    return state;
  }
}

export default wallet;
