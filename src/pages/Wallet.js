import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import {
  // getCurrencies,
  // totalValueAction,
  addExpensesThunk,
  fetchCurrenciesThunk,
  deleteExpense,
} from '../actions';
// import InputLabeled from '../components/InputLabeled';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      tag: 'Alimentação',
      method: 'Dinheiro',
      description: '',
      currency: 'USD',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target: { name, type, value, checked } }) {
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  inputLabeledPayment() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" name="method" value={ method } onChange={ this.handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputLabeledTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  inputLabeledValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          type="text"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputLabeledDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputLabeledCurrency() {
    const { currencies } = this.props;
    const { currency } = this.state;
    const { USDT, ...currenciesNoUSDT } = currencies;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {
            Object.values(currenciesNoUSDT).map(
              (curr) => (
                <option
                  key={ curr.code }
                  value={ curr.code }
                >
                  {curr.code}
                </option>
              ),
            )
          }
        </select>
      </label>
    );
  }

  // inputLabeled(label, type, value, onChange) {
  //   return (
  //     <InputLabeled
  //       // id={ label }
  //       type={ type }
  //       label={ label }
  //       // name={ name }
  //       value={ value }
  //       onChange={ onChange }
  //     />
  //   );
  // }

  render() {
    const { email, total, currencies, onSubmit, expenses, deleteRow } = this.props;
    return (
      <>
        <header>
          <span>Email: </span>
          <span data-testid="email-field">{email}</span>
          <span>Total: </span>
          <span data-testid="total-field">{total}</span>
          <span>Moeda: </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form
          onSubmit={ (ev) => {
            ev.preventDefault();
            onSubmit(this.state, currencies);
          } }
        >
          { this.inputLabeledValue() }
          { this.inputLabeledDescription() }
          { this.inputLabeledCurrency() }
          { this.inputLabeledPayment() }
          { this.inputLabeledTag() }
          <button type="submit">Adicionar Despesa</button>
        </form>
        <Table expenses={ expenses } deleteRow={ deleteRow } />
      </>
    );
  }
}

const convertCurrency = (expense) => Number((
  parseFloat(expense.exchangeRates[expense.currency].ask)
  * parseFloat(expense.value)).toFixed(2));

const getTotalValue = (state) => (state.wallet.expenses.length
  ? state.wallet.expenses.reduce((acc, expense) => acc + convertCurrency(expense), 0)
  : 0);

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  email: state.user.email,
  total: getTotalValue(state), // state.wallet.expenses.reduce((a, b) => a.value + b.value) || '0',
  currencies: state.wallet.currencies,
  // count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  // totalValue: (value) => dispatch(totalValueAction(value)),
  onSubmit: (value, currencies) => dispatch(addExpensesThunk(value, currencies)),
  fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
  deleteRow: (ev) => dispatch(deleteExpense(ev.target.parentNode.id)),
});

Wallet.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
