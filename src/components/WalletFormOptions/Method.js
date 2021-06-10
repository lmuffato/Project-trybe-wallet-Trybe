import React from 'react';
import { func, string } from 'prop-types';

export default function Method(props) {
  const { handleInput, method } = props;
  return (
    <label htmlFor="expense-method">
      Método de pagamento:
      <select
        id="expense-method"
        name="method"
        value={ method }
        onChange={ handleInput }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de Crédito</option>
        <option value="Cartão de débito">Cartão de Débito</option>
      </select>
    </label>
  );
}

Method.propTypes = {
  handleInput: func,
  methdo: string,
}.isRequired;
