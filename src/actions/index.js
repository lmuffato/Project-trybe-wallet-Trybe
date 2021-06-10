export const NEW_EMAIL = 'NEW_EMAIL';
export const ACRONYM_COINS = 'ACRONYM_COINS';

export const newEmail = (payload) => ({
  type: NEW_EMAIL,
  payload,
});

export const acronycCoins = (payload) => ({
  type: ACRONYM_COINS,
  payload,
});

export const fetchCoins = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json()
      .then(
        (json) => dispatch(acronycCoins(json)),
      ));
};
