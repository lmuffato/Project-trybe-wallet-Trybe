import React from 'react';
import { connect } from 'react-redux';
import { func, objectOf, object, arrayOf } from 'prop-types';
import { fetchCurrencies, setTotalPrice, setExpense } from '../actions';

class WalletExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.setTotalPrice = this.setTotalPrice.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCurrencySelector = this.renderCurrencySelector.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  setTotalPrice() {
    const { expenses } = this.props;
    console.log(expenses);
  }

  async fetchCurrencies() {
    const { dispatchFetchCurrencies } = this.props;
    dispatchFetchCurrencies();
  }

  handleInputs({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    await this.fetchCurrencies();
    const { value, description, currency, method, tag } = this.state;
    const { currencies, expenses } = this.props;
    const { dispatchSetExpense, dispatchSetTotalPrice } = this.props;
    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    dispatchSetExpense(expense);
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
    const { expenses: newExpenses } = this.props;
    const totalPrice = newExpenses.reduce((total, newExpense) => {
      const toInt = 10000;
      const exchangeToInt = newExpense.exchangeRates[newExpense.currency].ask * toInt;
      const valueToInt = newExpense.value;
      const convertionValue = Math.round(exchangeToInt * valueToInt) / (toInt);
      return total + convertionValue;
    }, 0);
    dispatchSetTotalPrice(totalPrice);
  }

  renderCurrencySelector() {
    const { currencies } = this.props;
    return (
      <select
        data-testid="currency-input"
        id="currency-input"
        name="currency"
        onChange={ this.handleInputs }
      >
        { Object.keys(currencies).map((currency) => (
          <option
            value={ currency }
            key={ currency }
            data-testid={ currency }
          >
            { currency }
          </option>)) }
      </select>
    );
  }

  renderPaymentMethod() {
    return (
      <select
        data-testid="method-input"
        id="method-input"
        name="method"
        onChange={ this.handleInputs }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  renderExpenseTag() {
    return (
      <select
        data-testid="tag-input"
        id="tag-input"
        name="tag"
        onChange={ this.handleInputs }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            id="value-input"
            name="value"
            onChange={ this.handleInputs }
            value={ value }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          { this.renderCurrencySelector() }
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          { this.renderPaymentMethod() }
        </label>
        <label htmlFor="tag-input">
          Tag:
          { this.renderExpenseTag() }
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            id="description-input"
            name="description"
            onChange={ this.handleInputs }
            value={ description }
          />
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCurrencies: () => dispatch(fetchCurrencies()),
  dispatchSetExpense: (expense) => dispatch(setExpense(expense)),
  dispatchSetTotalPrice: (totalPrice) => dispatch(setTotalPrice(totalPrice)),
});

WalletExpenses.propTypes = {
  dispatchFetchCurrencies: func,
  dispatchSetExpense: func,
  currencies: objectOf(object),
  expenses: arrayOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletExpenses);
