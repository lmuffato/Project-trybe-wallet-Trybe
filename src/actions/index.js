// Coloque aqui suas actions
const logginSucess = (email) => ({
  type: 'loggin_sucess',
  email,
});

const storeLog = (email) => (dispatch) => {
  dispatch(logginSucess(email));
};

export default storeLog;
