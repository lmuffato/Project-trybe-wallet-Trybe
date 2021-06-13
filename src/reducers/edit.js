import { CHANGE_UPDATE } from '../actions';

const INITIAL_STATE = {
  editCell: null,
  editing: false,
};

function editReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_UPDATE:
    return { ...state, editCell: action.payload.id, editing: action.payload.editing };
  default:
    return state;
  }
}

export default editReducer;
