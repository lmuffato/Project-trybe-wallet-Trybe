/* em = email */
export const checkEmail = (em) => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(em);
const minLength = 6;
export const checkPass = (password) => password.length >= minLength;
