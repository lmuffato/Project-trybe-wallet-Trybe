import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MethodInput extends Component {
  render() {
    const { handleChange, method } = this.props;

    return (
      <label htmlFor="metodo-pgto">
        Método de pagamento
        <select
          value={ method }
          name="method"
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MethodInput.propTypes = {
  handleChange: PropTypes.func,
  method: PropTypes.string,
}.isRequired;

export default MethodInput;
