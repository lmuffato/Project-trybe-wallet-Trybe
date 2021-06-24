import { SHOW } from '../actions';

const INITIAL_STATE = {
  showTable: false,
};

function getTable(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SHOW:
    return { showTable: action.payload,
    };
  default:
    return state;
  }
}

export default getTable;
