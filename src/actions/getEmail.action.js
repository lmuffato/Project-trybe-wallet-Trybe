import { USER_EMAIL } from '../common/def';

export default function getEmail(email) {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}
