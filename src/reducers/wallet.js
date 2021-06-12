import INITIAL_STATE from '../constants/INITIAL_STATE';

const walletReducer = (state = INITIAL_STATE.wallet, action) => {
  const { type } = action;
  switch (type) {
  default:
    return state;
  }
};

export default walletReducer;
