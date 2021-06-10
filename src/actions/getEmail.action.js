import USER_EMAIL from '../common/typesAction';

export default function getEmail(email) {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}
