import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PaymentMethod from './PaymentMethod';
import ExpenseTag from './ExpenseTag';
import { fetchCurrencies, getExangeRatesAC, saveExpensesAC } from '../../actions';

class WalletForm extends Component {
  constructor(_props) {
    super(_props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateExpense = this.validateExpense.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'creditcard',
      tag: 'alimentacao',
      expense: [],
    };
  }

  // componentDidUpdate() {
  //   this.validateExpense();
  // }

  handleChange(event) {
    const { id: name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  validateExpense() {
    const { value, description } = this.state;
    const btnAddexpense = document.querySelector('button');
    if (btnAddexpense) {
      if (value === '' || description === '') btnAddexpense.disabled = true;
      else btnAddexpense.disabled = false;
    }
  }

  handleClick() {
    const { value, description, currency, method, tag, expense } = this.state;
    const { getExangeRatesFromAPI, sendExpensesToStore } = this.props;

    const id = expense.length;
    getExangeRatesFromAPI().then(() => {
      const { exchangeRates } = this.props;
      const currentExpense = {
        value, description, currency, method, tag, id, exchangeRates };

      this.setState((previousState) => ({
        value: '',
        description: '',
        currency: 'USD',
        method: 'creditcard',
        tag: 'alimentacao',
        expense: [...previousState.expense, currentExpense],
      }), () => {
        const { expense: currentExpenses } = this.state;
        sendExpensesToStore(currentExpenses);
      });
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            step="0.01"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.handleChange }>
            {currencies.map((coin, index) => (
              <option key={ index } value={ coin }>{ coin }</option>))}
          </select>
        </label>
        <PaymentMethod value={ method } handleChange={ this.handleChange } />
        <ExpenseTag value={ tag } handleChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.currentExangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  getExangeRatesFromAPI: () => dispatch(fetchCurrencies(getExangeRatesAC)),
  sendExpensesToStore: (data) => dispatch(saveExpensesAC(data)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  getExangeRatesFromAPI: PropTypes.func.isRequired,
  sendExpensesToStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
