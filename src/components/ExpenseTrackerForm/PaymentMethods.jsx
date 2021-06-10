import React from 'react';
import PropTypes from 'prop-types';

function PaymentMethods({ value, handleChange, name }) {
  return (
    <label htmlFor="payment-method">
      Método de pagamento
      <select
        name={ name }
        id="payment-method"
        value={ value }
        onChange={ handleChange }
      >
        <option value=" ">Selecione</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    </label>
  );
}

PaymentMethods.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default PaymentMethods;
