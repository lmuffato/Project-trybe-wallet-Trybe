import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, addExpense } from '../actions';

class AddExpenseForm extends React.Component {
  constructor() {
    super();
    this.currenciesOptions = this.currenciesOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
    };
  }

  currenciesOptions() {
    const { currencies } = this.props;
    return (
      currencies.map((currency, index) => (
        <option
          value={ currency.code }
          key={ index }
        >
          { currency.code }
        </option>
      ))
    );
  }

  handleChange(event) {
    const { target } = event;
    this.setState(() => ({
      [target.name]: target.value,
    }));
  }

  async handleSubmit(event) {
    const { getCurrentCurrencies, addExpenseDispatch } = this.props;
    event.preventDefault();
    await getCurrentCurrencies();
    const { currentCurrencies } = this.props;

    addExpenseDispatch({
      ...this.state,
      exchangeRates: currentCurrencies,
    });

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  paymentMethodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          id="payment-method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tagSelect() {
    const { tag } = this.state;
    return (
      <label htmlFor="select-tag">
        Tag
        <select
          id="select-tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency } = this.state;
    return (
      <form onSubmit={ (event) => this.handleSubmit(event) }>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            { this.currenciesOptions() }
          </select>
        </label>
        { this.paymentMethodSelect() }
        { this.tagSelect() }
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  addExpenseDispatch: PropTypes.func.isRequired,
  currentCurrencies: PropTypes.shape({}),
  getCurrentCurrencies: PropTypes.func.isRequired,
};

// defaultProps utilizada conforme dica do Lucas Pedroso no slack para tirar o erro:
// Warning: Failed prop type: The prop `currentCurrencies` is marked as required in `AddExpenseForm`, but its value is `undefined`.
AddExpenseForm.defaultProps = {
  currentCurrencies: {},
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currentCurrencies: state.wallet.currentCurrencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk(false)),
  getCurrentCurrencies: () => dispatch(getCurrenciesThunk(true)),
  addExpenseDispatch: (payload) => dispatch(addExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
