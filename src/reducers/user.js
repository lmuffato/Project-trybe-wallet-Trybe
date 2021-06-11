import ACTIONS from '../constants/actions';
import db from '../helpers/db';

const userReducer = (state = db.user, action) => {
  const { type, value } = action;
  switch (type) {
  case ACTIONS.LOGIN:
    return value;
  default:
    return state;
  }
};

export default userReducer;
