import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CurrencyInput extends Component {
  render() {
    const { currenciesList, handleChange, currency } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select
          value={ currency }
          onChange={ handleChange }
          id="currency"
          data-testid="currency-input"
        >
          {currenciesList.map((curr) => (
            <option
              key={ curr }
              value={ curr }
            >
              {curr}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesList: state.wallet.currencies,
});

CurrencyInput.propTypes = {
  currenciesList: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  currency: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(CurrencyInput);
