import React from 'react';
import Currencies from './Currencies';
import '../css/Form.css';

function Form() {
  return (
    <form>
      <div className="container">
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
          />
        </label>
      </div>
      <div className="container">
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
          />
        </label>
      </div>
      <Currencies />
      <div className="container">
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão-de-crédito">Cartão de crédito</option>
            <option value="cartão-de-débito">Cartão de débito</option>
          </select>
        </label>
      </div>
      <div className="container">
        <label htmlFor="tags">
          Tag
          <select id="tags" name="tags">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </div>
    </form>
  );
}

export default Form;
