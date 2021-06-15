import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { coinThunk, addExpense, totalValue } from '../actions';
import ValueInput from './ValueInput';
import DescriptionInput from './DescriptionInput';
import PaymentInput from './PaymentInput';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      expenses: [],
      count: 0,

    };
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { thunk } = this.props;
    thunk();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async addExpense(event) {
    event.preventDefault();
    const { thunk, add, total } = this.props;
    const { value, description, currency, method, tag, count } = this.state;
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    const actualTax = await thunk();
    const newExpense = {
      id: count,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: actualTax,

    };

    // this.setState(() => ({ expenses: newExpense }));
    // const { expenses } = this.state;
    add(newExpense);
    const exRate = parseFloat(newExpense.exchangeRates[currency].ask).toFixed(2);
    const expenseValue = newExpense.value * exRate;
    total(expenseValue);
  }

  render() {
    const { currecies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form onSubmit={ this.addExpense }>
        <ValueInput handleChange={ this.handleChange } value={ value } />
        <DescriptionInput handleChange={ this.handleChange } value={ description } />
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }

          >
            {currecies.map((coin) => (
              <option value={ coin[0] } key={ coin[0] }>{coin[0]}</option>
            ))}
          </select>

        </label>
        <PaymentInput handleChange={ this.handleChange } method={ method } />
        <label htmlFor="tag">
          Tag
          <select
            type="text"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>

      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  thunk: () => dispatch(coinThunk()),
  add: (expense) => dispatch(addExpense(expense)),
  total: (newTotal) => dispatch(totalValue(newTotal)),
});

const mapStateToProps = (state) => ({
  currecies: state.wallet.currencies,
});

Form.propTypes = {
  thunk: PropTypes.func,
  currecies: PropTypes.array,

}.isRequired;
export default connect(mapStateToProps, mapDispatchToProps)(Form);
