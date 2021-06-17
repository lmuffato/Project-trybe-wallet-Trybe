import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCurrenciesThunk, addExpense, removeExpense, stopEditingExpense } from '../actions';

class AddExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.currenciesOptions = this.currenciesOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setInputs = this.setInputs.bind(this);

    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      editingExpense: {
        currency: '',
        description: '',
        exchangeRates: {},
        id: 0,
        method: '',
        tag: '',
        value: '',
      },
      editing: false,
    };
  }

  componentDidUpdate() {
    const { editGlobal } = this.props;
    if (editGlobal) this.setInputs();
  }

  setInputs() {
    const { currentExpenseIndex, allExpenses, stopEditing } = this.props;
    const currentExpense = allExpenses[currentExpenseIndex];
    this.setState({
      value: currentExpense.value,
      description: currentExpense.description,
      currency: currentExpense.currency,
      method: currentExpense.method,
      tag: currentExpense.tag,
      editingExpense: currentExpense,
      editing: true,
    });
    stopEditing();
  }

  async handleSubmit(event) {
    const { deleteExpense, getCurrentCurrencies, addExpenseDispatch } = this.props;
    const {
      id,
      value, description, currency, method, tag, editing, editingExpense } = this.state;
    event.preventDefault();
    await getCurrentCurrencies();
    const { currentCurrencies } = this.props;

    if (editing) {
      await deleteExpense(editingExpense.id);
      addExpenseDispatch({
        value,
        description,
        currency,
        method,
        tag,
        id: editingExpense.id,
        exchangeRates: editingExpense.exchangeRates,
      });

      return this.setState({
        editing: false,
      });
    }

    addExpenseDispatch({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currentCurrencies,
    });

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      editing: false,
    }));

    // editing: false
  }

  paymentMethodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          data-testid="method-input"
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
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          data-testid="tag-input"
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

  currenciesOptions() {
    const { currencies } = this.props;
    return (
      currencies.map((currency, index) => (
        <option
          value={ currency }
          key={ index }
        >
          { currency }
        </option>
      ))
    );
  }

  handleChange(event) {
    const { target } = event;
    this.setState(() => ({
      [target.id]: target.value,
    }));
  }

  render() {
    const { value, description, currency, editing } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
          >
            { this.currenciesOptions() }
          </select>
        </label>
        { this.paymentMethodSelect() }
        { this.tagSelect() }
        {!editing ? <button type="submit">Adicionar despesa</button>
          : (<button type="submit">Editar despesa</button>)}
      </form>
    );
  }
}

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  addExpenseDispatch: PropTypes.func.isRequired,
  currentCurrencies: PropTypes.shape({}),
  getCurrentCurrencies: PropTypes.func.isRequired,
  stopEditing: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  editGlobal: PropTypes.bool.isRequired,
  currentExpenseIndex: PropTypes.number.isRequired,
  allExpenses: PropTypes.arrayOf(Object).isRequired,
};

// defaultProps utilizada conforme dica do Lucas Pedroso no slack para tirar o erro:
// Warning: Failed prop type: The prop `currentCurrencies` is marked as required in `AddExpenseForm`, but its value is `undefined`.
AddExpenseForm.defaultProps = {
  currentCurrencies: {},
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currentCurrencies: state.wallet.currentCurrencies,
  editGlobal: state.wallet.editingExpense,
  currentExpenseIndex: state.wallet.selectedExpense,
  allExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk(false)),
  getCurrentCurrencies: () => dispatch(getCurrenciesThunk(true)),
  addExpenseDispatch: (payload) => dispatch(addExpense(payload)),
  deleteExpense: (index) => dispatch(removeExpense(index)),
  stopEditing: () => dispatch(stopEditingExpense()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
