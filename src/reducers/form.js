import {
  GET_EXPENSE_TO_FORM,
  HANDLE_CHANGE_INPUT,
} from '../actions';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: '',
  method: '',
  tag: '',
};

const form = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXPENSE_TO_FORM:
    return {
      ...state,
      formState: {
        ...action.payload.expense,
      },
    };
  case HANDLE_CHANGE_INPUT:
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  default:
    return state;
  }
};

export default form;
