import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PaymentMethods extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          name="method"
          value={ value }
          onChange={ handleChange }
        >
          <option>selecione</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethods.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
