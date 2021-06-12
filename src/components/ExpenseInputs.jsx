import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseInputs extends Component {
  expenseValue() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="expense-value">
          Valor
          <input
            type="number"
            id="expense-value"
            name="value"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }

  descriptionValue() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="description-value">
          Descrição
          <input
            type="text"
            id="description-value"
            name="description"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }

  coinValue() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="coin-input" onChange={ handleChange }>
          Moeda
          <select id="coin-input" name="coin">
            vazio
          </select>
        </label>
      </div>
    );
  }

  payMethod() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pay-method">
          Método de pagamento
          <select
            id="pay-method"
            name="payment"
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }

  tagExpense() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="tag-expense">
          Tag
          <select
            id="tag-expense"
            name="tag"
            onChange={ handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.expenseValue()}
        {this.descriptionValue()}
        {this.coinValue()}
        {this.payMethod()}
        {this.tagExpense()}
      </div>
    );
  }
}

ExpenseInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ExpenseInputs;
