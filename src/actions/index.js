// referência Bruno, que me ensinou o conceito de actions_Creators. Utilizando actions como funções.

const logginSucess = (email) => ({
  type: 'loggin_sucess',
  email,
});

const addExpenses = (expenses) =>({
  type: 'ADD_EXPENSES',
  expenses,
})

const storeLog = (email) => (dispatch) => {
  dispatch(logginSucess(email));
};

export const storeExpenses = (expenses) => (dispatch) => {
  dispatch(addExpenses(expenses));
}

export default storeLog;
