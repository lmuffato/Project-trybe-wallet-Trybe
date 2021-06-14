import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CurrencyInput extends Component {
  render() {
    const { currenciesList, handleChange, currency } = this.props;

    return (
      <label htmlFor="moeda">
        Moeda
        <select
          value={ currency }
          onChange={ handleChange }
          name="currency"
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
