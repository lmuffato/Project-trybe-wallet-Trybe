import initialState from './initialState';

const wallet = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSES':
    return {
      ...state,
      expenses: action.expenses
    };
    default:
    return state;
  }
};

export default wallet;
