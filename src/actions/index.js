const generateAction = (type) => (payload) => ({ type, payload });

const loginAction = generateAction('LOGIN');

export default loginAction;
