import { EMAIL } from '../actions/index';

const emailReducer = (state = '', action) => {
  switch (action.type) {
  case EMAIL:
    return { email: action.payload.value };
  default: return state;
  }
};

export default emailReducer;
