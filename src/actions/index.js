const LOGIN_ACTION = 'LOGIN_ACTION';
const TOTAL_ACTION = 'TOTAL_ACTION';

const loginAction = (payload) => ({ type: LOGIN_ACTION, payload });
export default loginAction;

export const TotalAction = (payload) => ({ type: TOTAL_ACTION, payload });
