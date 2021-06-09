// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
  password: '',
  emailIsValid: false,
  passwordIsValid: false,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TYPED_EMAIL':
    return {
      ...state,
      email: action.payload.email,
    };

  case 'TYPED_PASSWORD':
    return {
      ...state,
      password: action.payload.password,
    };

  case 'EMAIL_IS_VALID':
    return {
      ...state,
      emailIsValid: true,
    };

  case 'PASSWORD_IS_VALID':
    return {
      ...state,
      passwordIsValid: true,
    };
  default: return state;
  }
};

export default user;
