import { LOGIN } from '../reducers/user';
import { GET, SUCCESS_REQUEST, FAIL_REQUEST, ADD_EXPENSES } from '../reducers/wallet';

export const loginAction = (payload) => ({ type: LOGIN, payload });

const successRequest = (json) => ({ type: SUCCESS_REQUEST, payload: json });
const getCurrency = () => ({ type: GET });
const failRequest = (error) => ({ type: FAIL_REQUEST, payload: error });
export const addExpensesAction = (payload) => ({ type: ADD_EXPENSES, payload });

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(getCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json()
        .then(
          (json) => dispatch(successRequest(json)),
          (error) => dispatch(failRequest(error)),
        ));
  };
}
