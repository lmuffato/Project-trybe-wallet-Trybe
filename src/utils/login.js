const minLengthPassword = 6;

export const checkEmail = (email) => {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(String(email).toLowerCase());
};

export const checkPassword = (password) => password.length >= minLengthPassword;
