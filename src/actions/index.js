// Coloque aqui suas actions

export const EMAIL_USER = 'EMAIL_USER';
export const WALLET_SPEND = 'WALLET_SPEND';

export const actionEmail = (email) => ({
  type: EMAIL_USER,
  email,
});

export const actionWalletSpend = (spend, objCoins) => ({
  type: WALLET_SPEND,
  newSpend: {
    id: spend.id,
    value: spend.value,
    description: spend.description,
    currency: spend.currency,
    method: spend.method,
    tag: spend.tag,
    exchangeRates: objCoins,
  },
});

export const fetchWalletSpend = (spend) => async (dispatch) => {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const objCoins = await data.json();

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete-btn

  delete objCoins.USDT;

  dispatch(actionWalletSpend(spend, objCoins));
};
