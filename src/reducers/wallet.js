// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

// import { VALID_EMAIL } from '../actions/index';

const initialState = {
  currencies: ['BRL'],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  // case VALID_EMAIL:
  // return { ...state, user: { ...user.email, email: action.email },
  //  };
  default:
    return state;
  }
}

export default wallet;
