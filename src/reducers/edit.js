import { SET_ID } from '../actions';

const INITIAL_STATE = {
  editCell: '',
};

function editReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_ID:
    return { ...state, editCell: action.payload };
  default:
    return state;
  }
}

export default editReducer;
