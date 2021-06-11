// referência Bruno, que me ensinou o conceito de actions_Creators. Utilizando actions como funções.

const logginSucess = (email) => ({
  type: 'loggin_sucess',
  email,
});

const storeLog = (email) => (dispatch) => {
  dispatch(logginSucess(email));
};

export default storeLog;
