import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
const setCurrencies = (coins) => {
  dispatch({
    type: 'SET_CURRENCIES',
    payload: {
      currencies: coins,
    },
  });
};

export default setCurrencies;
