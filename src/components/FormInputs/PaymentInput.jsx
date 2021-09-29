import React from 'react';
import PropTypes from 'prop-types';

// Referênica para desenvolvimento do projeto: https://github.com/tryber/sd-010-a-project-trybewallet/pull/75/files
class PaymentInput extends React.Component {
  render() {
    const { localValue, onChange } = this.props;
    return (
      <label htmlFor="method">
        Método de Pagamento
        <select
          id="method"
          name="method"
          value={ localValue }
          onChange={ onChange }
        >
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
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
