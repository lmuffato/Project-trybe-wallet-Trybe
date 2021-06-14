import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AddExpenseForm extends React.Component {
  render() {
    const { currencies } = this.props;
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
            {
              currencies.map((currency) => (
                <option
                  value={ currency.code }
                  key={ currency.code }
                >
                  { currency.code }
                </option>
              ))
            }
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

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(AddExpenseForm);
