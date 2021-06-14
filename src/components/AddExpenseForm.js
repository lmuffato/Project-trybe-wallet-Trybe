import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AddExpenseForm extends React.Component {
  constructor() {
    super();
    this.currenciesOptions = this.currenciesOptions.bind(this);
  }

  currenciesOptions() {
    const { currencies } = this.props;
    return (
      currencies.map((currency, index) => (
        <option
          value={ currency.code }
          key={ index }
        >
          { currency.code }
        </option>
      ))
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency">
            { this.currenciesOptions() }
          </select>
        </label>
        <label htmlFor="select-payment-method">
          Método de pagamento
          <select id="select-payment-method">
            <option key="money">Dinheiro</option>
            <option key="credit">Cartão de Crédito</option>
            <option key="debit">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select id="select-tag">
            <option key="food">Alimentação</option>
            <option key="fun">Lazer</option>
            <option key="work">Trabalho</option>
            <option key="commuting">Transporte</option>
            <option key="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(AddExpenseForm);
