import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesAPIThunk } from '../actions/wallet';

class InputCurrencies extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
    console.log('componentDidMount foi renderizado');
  }

  /* componentDidUpdate() {
    const { getCurrencies } = this.props;
    getCurrencies();
    console.log('componentDidUpdate foi renderizado');
    console.log('SE VOCÊ TEM AMOR PELO SEU NOTE, NÃO USE ISSO!!!!!')
  } */

  render() {
    const { currencies, propValue, onChange } = this.props;
    console.log(currencies);
    // currencies.splice(1, 1);
    /* console.log(currencies); */
    return (
      <label htmlFor="moedas">
        Moeda
        <select
          id="moedas"
          name="currency"
          value={ propValue }
          onChange={ onChange }
        >
          {/* <option value="">Selecione a moeda</option> */}
          {currencies.map((currency) => (
            <option key={ currency.code } value={ currency.code }>
              { currency.code }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesAPIThunk()),
});

InputCurrencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  propValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputCurrencies);
