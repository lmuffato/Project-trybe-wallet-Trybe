export const EMAIL_USER = 'EMAIL_USER';
export const WALLET_SPEND = 'WALLET_SPEND';
export const DELET_EXPENSE = 'DELET_EXPENSE';

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
  delete objCoins.USDT;

  dispatch(actionWalletSpend(spend, objCoins));
};

export const actionDeleteExpense = (id) => ({
  type: DELET_EXPENSE,
  id,
});
