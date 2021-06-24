import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Payment from './payment';
import Tag from './tag';
import { fetchExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.getExpense = this.getExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getExpense() {
    const { fetchExpensesProps, expenses } = this.props;
    const expense = { ...this.state, id: expenses.length };
    fetchExpensesProps(expense);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const keysCurrencies = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {keysCurrencies.map((curr, index) => (
              <option key={ index }>{curr}</option>
            ))}
          </select>
        </label>
        <Payment handleChange={ this.handleChange } />
        <Tag handleChange={ this.handleChange } />
        <button type="button" onClick={ this.getExpense }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExpensesProps: (expense) => dispatch(fetchExpenses(expense)),
});

Form.propTypes = {
  currencies: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
