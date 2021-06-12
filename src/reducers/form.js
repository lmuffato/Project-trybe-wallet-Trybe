import {
  GET_EXPENSE_TO_FORM,
  HANDLE_CHANGE_INPUT,
  CLEAR_FORM,
} from '../actions';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: '',
  method: '',
  tag: '',
  edit: false,
};

const form = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EXPENSE_TO_FORM:
    return {
      ...action.payload.expense,
      edit: true,
    };
  case HANDLE_CHANGE_INPUT:
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  case CLEAR_FORM:
    return INITIAL_STATE;
  default:
    return state;
  }
};

export default form;
