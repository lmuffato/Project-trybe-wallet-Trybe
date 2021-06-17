export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  payload: currencies,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(receiveCurrencies(Object.keys(data)
    .filter((currency) => currency !== 'USDT')));
};

export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const requestExpenses = () => ({
  type: REQUEST_EXPENSES,
});

export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const receiveExpenses = (payload) => ({
  type: RECEIVE_EXPENSES,
  payload,
});

const fetchExpense = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

export const fatchExpDisp = (expenses) => (dispathc) => {
  dispathc(requestExpenses());
  fetchExpense().then((expense) => {
    const exRates = {
      ...expenses,
      exchangeRates: {
        ...expense,
      },
    };
    dispathc(receiveExpenses(exRates));
  });
};

/* Agradeço meu amigos da Turma 10 Tribo A por me auxiliar no desenvolvimento deste
projeto. Obrigado todos envolvidos, e saibam que sou muito grato pois sem vocês eu não
teria consigo.

Referências

📌 Beatriz Estebanez - Turma 10 - Tribo A | https://github.com/beatriz-estebanez
📌 Victor Canto - Turma 10 - Tribo A | https://github.com/victorcanto
📌 Nilson Ribeiro - Turma 10 - Tribo A | https://github.com/NilsonRCS
📌 Guilherme Dornelles - Turma 10 - Tribo A | https://github.com/guilhermemd
📌 Rafael Medeiros - Turma 10 - Tribo A | https://github.com/RafaelMedeirosGomes
*/
