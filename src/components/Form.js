import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    return (
      <form>

        <label htmlFor="value">
          Valor:
          <input type="number" id="value" name="value" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            <option>A</option>
            <option>B</option>
            {/* As opções do select serão preenchidas através da consulta à API.
             Isso será feito em um requisito mais a frente. */}
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento
          <select id="paymentMethod" name="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="spendType">
          Tag:
          <select id="spendType" name="spendType">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

export default Form;
