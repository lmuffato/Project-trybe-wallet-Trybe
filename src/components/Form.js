import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dispatchCurrencies } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies } = this.props;
    const validCurrencies = currencies.filter((currency) => (
      currency !== 'USDT' && currency !== 'DOGE'));
    console.log(`AS moedas são: ${currencies}`);
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
            {validCurrencies.map((currency) => (
              <option key={ currency }>
                {currency}
              </option>
            ))}
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
        <label htmlFor="expenseType">
          Tag:
          <select id="expenseType" name="expenseType">
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispathToProps = (dispatch) => ({
  getCurrency: () => dispatch(dispatchCurrencies()),
});

Form.propTypes = {
  getCurrency: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispathToProps)(Form);
