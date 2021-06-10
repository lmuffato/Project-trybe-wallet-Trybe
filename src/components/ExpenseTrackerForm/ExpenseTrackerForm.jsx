import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currency from './Currency';
import Description from './Description';
import PaymentMethods from './PaymentMethods';
import Tags from './Tags';
import Value from './Value';
import {
  getCurrenciesThunkTest,
  addingExpense,
} from '../../actions';

class ExpenseTrackerForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    // console.log('clique do botão add expenses');
    // console.log(this.state);
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const { addNewExpenseToTracker, expenses } = this.props;
    const request = await fetch(endpoint);
    const data = await request.json();
    addNewExpenseToTracker({
      ...this.state,
      id: expenses.length,
      exchangeRates: data,
    });
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { value, tag, description, currency, method } = this.state;
    const { currencies } = this.props;
    const filteredCurrencies = Object.keys(currencies)
      .filter((curr) => curr !== 'USDT');

    return (
      <form>
        <Value
          value={ value }
          name="value"
          handleChange={ (e) => this.handleChange(e) }
        />
        <Description
          name="description"
          value={ description }
          handleChange={ (e) => this.handleChange(e) }
        />
        <Currency
          name="currency"
          currencies={ filteredCurrencies }
          value={ currency }
          handleChange={ (e) => this.handleChange(e) }
        />
        <PaymentMethods
          handleChange={ (e) => this.handleChange(e) }
          value={ method }
          name="method"
        />
        <Tags
          name="tag"
          value={ tag }
          handleChange={ (e) => this.handleChange(e) }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunkTest()),
  addNewExpenseToTracker: (expense) => dispatch(addingExpense(expense)),
});

ExpenseTrackerForm.propTypes = {
  currencies: PropTypes.shape(PropTypes.string || PropTypes.object || PropTypes.array),
  getCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTrackerForm);
