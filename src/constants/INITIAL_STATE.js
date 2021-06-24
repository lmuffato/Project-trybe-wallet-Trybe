const selectString = 'Selecione...';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    exchangeRates: {},
    currencies: [],
    expenses: [],
    editing: false,
    expense: {
      id: 0,
      value: '',
      currency: selectString,
      method: selectString,
      tag: selectString,
      description: '',
      exchangeRates: {},
    },
    inputs: [],
  },
};

export default INITIAL_STATE;
