export const GET_EMAIL = 'GET_EMAIL';

// action creator que retorna um objeto
export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});
