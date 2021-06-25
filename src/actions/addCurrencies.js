import getAPI from '../services/API';
import { LOADING, SUCCESS, FAIL } from '.';

const loading = () => ({
  type: LOADING,
});

const success = (payload) => ({
  type: SUCCESS,
  payload,
});

const fail = (payload) => ({
  type: FAIL,
  payload,
});

const fetchCoins = () => async (dispatch) => {
  dispatch(loading());
  try {
    const funcgetAPI = await getAPI();
    const filterCoins = Object.values(funcgetAPI).reduce((acc, cur) => {
      if (cur.codein !== 'BRLT') acc.push(cur.code);
      return acc;
    }, []);
    dispatch(success(filterCoins));
  } catch (error) {
    dispatch(fail(error));
  }
  dispatch(loading());
};

export default fetchCoins;
