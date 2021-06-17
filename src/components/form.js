import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDespesa } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyOpt: [],
      exchange: [],
      expenses: [{
        id: 0,
        currency: 'USD',
        tag: 'ali',
        payment_method: 'din',
        despesa: 0,
        despesa_description: '',
        exchangeRates: [],
      }],
    };
  }

  componentDidMount() {
    this.currencyAPI();
  }

  totalValue() {
    const { expenses } = this.props;
    let total = 0;
    const expense = Object.values(expenses);
    for (let index = 0; index < expense.length; index += 1) {
      total += parseFloat(expense[index].despesa);
    }
    return total;
  }

  async currencyAPI() {
    const fetc = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetc.json();
    const semiFiltered = Object.entries(response).filter((cur) => cur !== 'USDT');
    const filtered = Object.keys(response).filter((cur) => cur !== 'USDT');
    this.setState({
      currencyOpt: filtered,
      exchange: semiFiltered,
    });
  }

  currencyOptions() {
    const { currencyOpt } = this.state;
    return (
      Object.values(currencyOpt)
        .map((cur, i) => (
          <option
            key={ i }
            value={ cur }
            name="currency"
          >
            {cur}
          </option>)));
  }

  paymentMethod() {
    return (
      <label htmlFor="payment_method">
        Método de pagamento
        <select
          id="payment_method"
          name="payment_method"
          onChange={ (e) => this.handleChange(e) }
        >
          <option value="din" name="payment_method">Dinheiro</option>
          <option value="cdc" name="payment_method">Cartão de crédito</option>
          <option value="cdd" name="payment_method">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagOptions() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ (e) => this.handleChange(e) }>
          <option value="ali" name="tag">Alimentação</option>
          <option value="laz" name="tag">Lazer</option>
          <option value="tra" name="tag">Trabalho</option>
          <option value="tre" name="tag">Transporte</option>
          <option value="sau" name="tag">Saúde</option>
        </select>
      </label>
    );
  }

  handleChange({ target }) {
    const { id, value } = target;
    const { expenses } = this.state;
    const position = expenses.length - 1;
    expenses[position][id] = value;
    this.setState({
      expenses,
    });
  }

  clearInputs() {
    document.getElementById('currency').value = 'USD';
    document.getElementById('tag').value = 'ali';
    document.getElementById('payment_method').value = 'din';
    document.getElementById('despesa').value = 0;
    document.getElementById('despesa_description').value = '';
  }

  handleClick() {
    this.clearInputs();
    const { despesa } = this.props;
    const { expenses, exchange } = this.state;
    const position = expenses.length - 1;
    if (expenses[position].exchangeRates.length === 0) {
      expenses[position].exchangeRates.push(exchange);
    }
    const newExpense = {
      id: expenses[position].id + 1,
      currency: 'USD',
      tag: 'ali',
      payment_method: 'din',
      despesa: 0,
      despesa_description: '',
      exchangeRates: [],
    };

    expenses.push(newExpense);
    this.setState({
      expenses,
    });
    despesa(expenses);
    console.log(this.totalValue());
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          {email}
        </span>
        <span>
          TotalDeGastos
          <input
            data-testid="total-field"
            readOnly
            name="total-expense"
            value={ this.totalValue() }
          />
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
        <form>
          <label htmlFor="despesa">
            Valor
            <input id="despesa" type="number" onChange={ (e) => this.handleChange(e) } />
          </label>
          <label htmlFor="despesa_description">
            Descrição
            <input
              id="despesa_description"
              type="text"
              onChange={ (e) => this.handleChange(e) }
            />
          </label>
          {this.paymentMethod()}
          <label htmlFor="currency">
            Moeda
            <select id="currency" onChange={ (e) => this.handleChange(e) }>
              {this.currencyOptions()}
            </select>
          </label>
          {this.tagOptions()}
          <button type="button" onClick={ (e) => this.handleClick(e) }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  despesa: (e) => dispatch(addDespesa(e)),
});

Form.propTypes = {
  despesa: PropTypes.objectOf(PropTypes.func).isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
