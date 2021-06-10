import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrencies from '../services/requestApi';
import Select from './Select';
import { agroupCurrencies, addExpense, sumExpenses } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de débito', 'Cartão de crédito'];
const expenseCategory = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: expenseCategory[0],
};

class FormExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { agroupCurrenciesToRedux } = this.props;
    const currencies = await fetchCurrencies();
    agroupCurrenciesToRedux(currencies);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { id, value, description, currency, method, tag } = this.state;
    const { addExpenseToRedux, sumExpensesToRedux } = this.props;
    const exchangeRates = await fetchCurrencies();
    const expensesAdd = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    const currencyIndex = Object.keys(exchangeRates).indexOf(currency);
    const quotation = Object.values(exchangeRates)[currencyIndex].ask;
    const valueForQuotation = parseFloat(value) * parseFloat(quotation);
    addExpenseToRedux(expensesAdd);
    sumExpensesToRedux(valueForQuotation);
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: expenseCategory[0],
    });
    const form = document.getElementById('add-expense-form');
    form.reset();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form id="add-expense-form">
        <input
          data-testid="value-input"
          name="value"
          type="number"
          onChange={ this.handleChange }
        />
        <input
          data-testid="description-input"
          name="description"
          onChange={ this.handleChange }
        />
        <Select
          textLabel="Moedas:"
          name="currency"
          onChange={ this.handleChange }
          options={ Object.keys(currencies) }
        />
        <Select
          textLabel="Método de Pagamento:"
          name="method"
          onChange={ this.handleChange }
          options={ paymentMethods }
        />
        <Select
          textLabel="Categoria da Despesa:"
          name="tag"
          onChange={ this.handleChange }
          options={ expenseCategory }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

FormExpense.propTypes = {
  agroupCurrenciesToRedux: PropTypes.func.isRequired,
  addExpenseToRedux: PropTypes.func.isRequired,
  sumExpensesToRedux: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf({}).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseToRedux: (expenses) => dispatch(addExpense(expenses)),
  agroupCurrenciesToRedux: (currencies) => dispatch(agroupCurrencies(currencies)),
  sumExpensesToRedux: (value) => dispatch(sumExpenses(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
