// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { SET_COINS, RATES, EXPENSE } from '../actions';
import { SET_COINS, EXPENSE, ATT_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalAmount: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_COINS:
    // console.log(action);
    return { ...state, currencies: action.payload };
  // case RATES:
  //   console.log('rates here.');
  //   return { ...state };
  case EXPENSE:
    console.log('expense here.');
    return { ...state,
      expenses: [...state.expenses, action.payload],
      totalAmount: Number(state.totalAmount)
      + Number(action.payload.value)
      * (action.payload.exchangeRates[action.payload.currency].ask),
    };
  case ATT_EXPENSES: {
    const { id, newTotalAmount } = action.payload;
    return { ...state,
      expenses: [...state.expenses.slice(0, id), // https://qastack.com.br/programming/34582678/is-this-the-correct-way-to-delete-an-item-using-redux
        ...state.expenses.slice(id + 1),
      ],
      totalAmount: Number(newTotalAmount),
    };
  }
  default:
    return state;
  }
}

export default walletReducer;
