import initialState from './initialState';

const wallet = (state = initialState, action) => {
  console.log(action);
  return (state);
};

export default wallet;
