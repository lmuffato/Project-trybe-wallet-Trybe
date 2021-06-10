import fetchAPI from '../services/requestApi';

// Coloque aqui suas actions
const userAction = (payload) => ({
  type: 'TYPE_EMAIL',
  payload,
});

const updateCurrency = () => async (dispatch) => {
  const currencies = await fetchAPI();
  dispatch({ type: 'UPDATE_CURRENCY',
    currencies });
};

export default { userAction, updateCurrency };
