import React from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends React.Component {
  render() {
    const { currencies, submitExpense, handler } = this.props;
    return (
      <form>
        <label htmlFor="expense-value">
          Valor
          <input type="number" name="value" id="expense-value" onChange={ handler } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" onChange={ handler } />
        </label>
        <label htmlFor="expense-currency">
          Moeda
          <select name="currency" id="expense-currency" onChange={ handler }>
            { currencies.map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="expense-payment-method">
          Método de pagamento
          <select name="method" id="expense-payment-method" onChange={ handler }>
            <option value="">Selecione</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select name="tag" id="expense-tag" onChange={ handler }>
            <option value="">Selecione</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ submitExpense }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitExpense: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired,
};

export default ExpensesForm;
