const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

const GET_SUCCESS = 'GET_SUCCESS';
const GET_ERROR = 'GET_ERROR';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_SUCCESS:
    return {
      ...state,
      currencies: [
        ...Object.keys(action.payload.currencies)
          .filter((key) => key !== 'USDT'),
      ],
    };
  case GET_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
}

export default wallet;
