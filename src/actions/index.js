export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_EMAIL = 'GET_EMAIL';

export const saveEmail = (user) => (
  { type: SAVE_EMAIL,
    user,
  }
);

export const getEmail = () => (
  { type: GET_EMAIL,
    wallet: {
      currencies: [],
      expenses: [],
    },
  }
);
