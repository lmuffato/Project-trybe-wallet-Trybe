const actionGen = (type) => (payload) => ({ type, payload });

export const loginAction = actionGen('LOGIN');
