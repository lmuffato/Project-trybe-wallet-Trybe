const actionGen = (type) => (payload) => ({ type, payload });
const loginAction = actionGen('LOGIN');

export default loginAction;
