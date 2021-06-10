const actionGen = (actionType) => (actionPayload) => (
  { type: actionType, payload: actionPayload }
);

export default actionGen;
