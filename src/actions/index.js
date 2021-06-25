// Coloque aqui suas actions
import reqAPI from '../services/reqAPI';

export const HANDLE_EMAIL = 'HANDLE_EMAIL';
export const handleEmail = (email) => ({ type: HANDLE_EMAIL, email });

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const getCurrency = (currency) => ({
  type: GET_CURRENCIES, currency });

export const dispatchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrency());
  const resp = await reqAPI();
  await dispatch(getCurrency(resp));
};

// FINALMENTE!!!!!!!
// Referência: revisar o https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react-actions-assincronas/5e038872-db20-44f5-b6d5-ab36b654fff6/conteudos/b96e5a97-916d-42d0-a979-f9e6b1ea6c8d/redux-thunk/b67d7f61-da7e-44e0-831e-581404f79bdf?use_case=side_bar
// Link de referência que também ajudou: https://oieduardorabelo.medium.com/redux-hoje-em-dia-de-action-creators-at%C3%A9-sagas-1b3d4cf7bf16

export const ADD_SPENDS = 'ADD_SPENDS';
export const addSpends = (spends) => ({
  type: ADD_SPENDS, spends,
});

export const expensesAdd = (state) => async (dispatch) => {
  const exchangeRates = await dispatchCurrencies();
  const expenses = {
    ...state,
    exchangeRates,
  };
  dispatch(expensesAdd(expenses));
};

// Ajuda da Nath no Req 08*! UFA!!! ^^

export const DEL_SPENDS = 'DEL_SPENDS';
export const deleteExpense = (payload) => ({
  type: DEL_SPENDS,
  payload,
});
