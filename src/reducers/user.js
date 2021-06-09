import USER_LOGIN from '../actions/actionTypes';

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.payload.user.email,
    };
  default:
    return state;
  }
};

export default userReducer;
