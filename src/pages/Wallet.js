import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Table from '../components/Table';
import { fetchCurrencies, fetchExchageRates, deleteExpense } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.dispatchExpense = this.dispatchExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.addExpense = this.addExpense.bind(this);

    this.state = {
      cost: {
        currency: 'USD',
        description: '',
        method: '',
        tag: '',
        value: '',
        id: 0,
      },
      total: 0,
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState((old) => ({
      cost: { ...old.cost, [name]: value },
    }));
  }

  async dispatchExpense() {
    const { expense } = this.props;
    const { cost: { value }, cost } = this.state;
    await expense(cost, value);
    this.setState((old) => ({
      cost: {
        currency: 'USD',
        description: '',
        method: '',
        tag: '',
        value: '',
        id: old.cost.id + 1,
      },
    }));
  }

  calcTotal(array) {
    const { expenses } = this.props;
    const total = array
      ? array.reduce((acc, cur) => (
        acc + (cur.value * cur.exchangeRates[cur.currency].ask)), 0)
      : expenses.reduce((acc, cur) => (
        acc + (cur.value * cur.exchangeRates[cur.currency].ask)), 0);

    const fixed = parseFloat(total).toFixed(2);
    this.setState({
      total: fixed,
    });
  }

  deleteExpense(id) {
    const { expenses, deleteCost } = this.props;
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    const debtObj = expenses.find((expense) => expense.id === id);
    const debt = debtObj.exchangeRates[debtObj.currency].ask * debtObj.value;
    deleteCost(newExpenses, debt);
    this.calcTotal(newExpenses);
  }

  async addExpense() {
    await this.dispatchExpense();
    this.calcTotal();
  }

  render() {
    const { email, currencies, expenses } = this.props;
    const { total } = this.state;
    const { cost } = this.state;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">{total}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form
          currencies={ currencies }
          value={ cost }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => this.addExpense() }
        >
          Adicionar despesa
        </button>
        { expenses
          ? <Table expenses={ expenses } onClick={ this.deleteExpense } />
          : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  expense: (state, price) => dispatch(fetchExchageRates(state, price)),
  deleteCost: (array, debt) => dispatch(deleteExpense(array, debt)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
