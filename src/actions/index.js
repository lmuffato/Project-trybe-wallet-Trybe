import exchangeAPI from '../services/exchangeAPI';

export const USER_EMAIL = 'USER_EMAIL';

export const WALLET_COINS = 'WALLET_COINS';
export const WALLET_RATES = 'WALLET_RATES';

export const emailAction = (payload) => ({ type: USER_EMAIL, payload });

export const coinsAction = (payload) => ({ type: WALLET_COINS, payload });
export const ratesAction = (payload) => ({ type: WALLET_RATES, payload });

export const thunkActionCoins = () => (dispacth) => {
  exchangeAPI()
    .then(((res) => {
      dispacth(coinsAction(res));
    }))
    .catch(() => {
      console.log('ErroApi');
    });
};

export const thunkActionRates = () => (dispacth) => {
  exchangeAPI()
    .then(((res) => {
      dispacth(ratesAction(res));
    }))
    .catch(() => {
      console.log('ErroApi');
    });
};
