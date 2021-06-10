import {
  ADD_AMOUNT,
  ADD_DESCRIPTION,
  ADD_CURRENCY_TYPE,
  PAYMENT_METHOD,
  ADD_TAG,
} from '../actions';

const initialState = {
  amount: 0,
  description: '',
  currency_type: '',
  paymentMethod: '',
  tag: '',
};

export default function inputValues(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_AMOUNT:
    return {
      ...state,
      amount: payload,
    };
  case ADD_DESCRIPTION:
    return {
      ...state,
      description: payload,
    };
  case ADD_CURRENCY_TYPE:
    return {
      ...state,
      currency_type: payload,
    };
  case PAYMENT_METHOD:
    return {
      ...state,
      paymentMethod: payload,
    };
  case ADD_TAG:
    return {
      ...state,
      tag: payload,
    };
  default:
    return state;
  }
}
