import getExchangeRates from '../services/exchangeAPI';

export const USER_EMAIL = 'USER_EMAIL';

export const WALLET_RATES = 'WALLET_RATES';

export const GET_EXCHANGE_SUCESS = 'GET_EXCHANGE_SUCESS';
export const GET_EXCHANGE_ERROR = 'GET_EXCHANGE_ERROR';

export const emailAction = (payload) => ({ type: USER_EMAIL, payload }); // "action creator". recebe e informação a salvar, retorna obj formatado
export const ratesyAction = (payload) => ({ type: WALLET_RATES, payload });

export const getApiActionSucess = (payload) => ({ type: GET_EXCHANGE_SUCESS, payload });
export const getApiActionError = (payload) => ({ type: GET_EXCHANGE_ERROR, payload });

export const getApiThunk = () => (dispacth) => {
  getExchangeRates()
    .then(((res) => {
      dispacth(ratesyAction(res));
    }))
    .catch(() => {
      console.log('ErroApi');
    });
};
