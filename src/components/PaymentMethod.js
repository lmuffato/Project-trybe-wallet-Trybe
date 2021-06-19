import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PaymentMethod extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          onChange={ handleChange }
          name="method"
          id="payment"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
