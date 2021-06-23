// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
function reducer() {
  return {
    user: {
      email: '',
    },
    wallet: {
      currencies: [],
      expenses: [],
    },
  };
}

export default reducer;
