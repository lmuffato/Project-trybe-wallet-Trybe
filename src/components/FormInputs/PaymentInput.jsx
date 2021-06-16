import React from 'react';
import PropTypes from 'prop-types';

class PaymentInput extends React.Component {
  render() {
    const { localValue, onChange } = this.props;
    return (
      <label htmlFor="pagamentoSelected">
        Método de pagamento
        <select
          id="pagamentoSelected"
          name="method"
          value={ localValue }
          onChange={ onChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="cartaoCredito">Cartão de Crédito</option>
          <option value="CartaoDebito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default PaymentInput;

PaymentInput.propTypes = {
  onChange: PropTypes.func,
  localValue: PropTypes.string,
}.isRequired;
