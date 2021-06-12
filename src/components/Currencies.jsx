import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { currenciesThunk } from '../actions';

function Currencies({ wallet: { currencies } }) {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(currenciesThunk()); }, []);
  return (
    <div className="container">
      <label htmlFor="currencies">
        Moeda
        <select name="currencies" id="currencies">
          { currencies && currencies.map((currency) => (
            <option value={ currency } key={ currency }>{currency}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  currenciesThunk: () => dispatch(currenciesThunk()),
});

const mapStateToProps = (state) => ({
  wallet: {
    currencies: state.wallet.currencies,
  },
});

Currencies.propTypes = { currencies: PropTypes.array }.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
