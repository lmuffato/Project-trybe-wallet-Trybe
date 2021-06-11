import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencyThunk, addExpense, getExchangeRateThunk } from '../actions';
import TextInputs from './TextInputs';

class Form extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      payment: ['Dinheiro',
        'Cartão de débito',
        'Cartão de crédito'],
      types: ['Alimentação',
        'Lazer',
        'Trabalho',
        'Transporte',
        'Saúde',
      ],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { currency, rates } = this.props;
    currency();
    rates();
  }

  async onClick() {
    const { value, description, currency, method, tag } = this.state;
    const { expense, expenseGlobal, exchangeRates } = this.props;
    const currentExpense = {
      id: expenseGlobal.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    expense(currentExpense);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { payment, types, value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <TextInputs
          handleChange={ this.handleChange }
          value={ value }
          description={ description }
        />
        <label htmlFor="currency-select">
          Moeda
          <select
            id="currency-select"
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
          >
            {currencies.map((curr, key) => <option key={ key }>{curr}</option>)}
          </select>
        </label>
        <label htmlFor="payment-type">
          Método de pagamento
          <select
            id="payment-type"
            onChange={ this.handleChange }
            name="method"
            value={ method }
          >
            {payment.map((pay, key) => <option key={ key }>{pay}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            onChange={ this.handleChange }
            name="tag"
            value={ tag }
          >
            {types.map((type, key) => <option key={ key }>{type}</option>)}
          </select>
        </label>
        <button type="button" onClick={ this.onClick }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  currency: () => dispatch(getCurrencyThunk()),
  expense: (expenses) => dispatch(addExpense(expenses)),
  rates: () => dispatch(getExchangeRateThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenseGlobal: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRate,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
