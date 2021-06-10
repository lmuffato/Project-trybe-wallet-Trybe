import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesAPIThunk } from '../actions/wallet';

class InputCurrencies extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    /* console.log(currencies); */
    currencies.splice(1, 1);
    /* console.log(currencies); */
    return (
      <label htmlFor="moedas">
        Moeda
        <select name="moedas" id="moedas">
          {/* <option value="">Teste</option> */}
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
  test: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesAPIThunk()),
});

InputCurrencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputCurrencies);
