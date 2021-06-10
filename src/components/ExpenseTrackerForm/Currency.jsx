import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Currency({ name, handleChange, value, currencies }) {
  return (
    <label htmlFor="currency">
      Moeda
      <select
        name={ name }
        id="currency"
        value={ value }
        onChange={ handleChange }
      >
        { currencies.map((currency) => (
          <option value={ currency } key={ currency }>{currency}</option>
        ))}
      </select>
    </label>
  );
}

const mapStateToProps = (state) => ({
  wallet: {
    currencies: state.wallet.currencies,
  },
});

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Currency);

// Referência:
// sintaxe correta da tag select: https://www.w3schools.com/tags/tag_select.asp
