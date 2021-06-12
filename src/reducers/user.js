import ACTIONS from '../constants/actions';
import INITIAL_STATE from '../constants/INITIAL_STATE';

const userReducer = (state = INITIAL_STATE.user, action) => {
  const { type, value } = action;
  switch (type) {
  case ACTIONS.LOGIN:
    return value;
  default:
    return state;
  }
};

export default userReducer;
