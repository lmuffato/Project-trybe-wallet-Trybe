export const USER_EMAIL = 'USER_MAIL';
export const WALLET_MONEY = 'WALLET_MONEY';

export const emailAction = (payload) => ({ type: USER_EMAIL, payload }); // "action creator". recebe e informação a salvar, retorna obj formatado
export const moneyAction = (payload) => ({ type: WALLET_MONEY, payload });
