import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, delExpense, fetchCurrencies, editExpense } from '../actions';
import ExpensesTable from '../component/ExpensesTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const initialFormExpense = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
    };
    this.state = {
      currentExpense: initialFormExpense,
      initialFormExpense,
      isEditing: false,
      editingExpense: {},
    };
    this.formToInserExpense = this.formToInserExpense.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.generateInput = this.generateInput.bind(this);
    this.generateSelect = this.generateSelect.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.updateTotalExpenses = this.updateTotalExpenses.bind(this);
    this.loaldToEdition = this.loaldToEdition.bind(this);
  }

  componentDidMount() {
    const { updateCurrencies } = this.props;
    updateCurrencies();
  }

  handleExpense({ target: { name, value } }) {
    this.setState((previusState) => ({
      currentExpense: { ...previusState.currentExpense, [name]: value },
    }));
  }

  generateSelect(label, name, options, value) {
    return (
      <label htmlFor={ name }>
        {label}
        <select
          id={ name }
          name={ name }
          value={ value }
          onChange={ this.handleExpense }
        >
          {options.map((option, index) => (
            <option key={ index }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  generateInput(label, name, type, value) {
    return (
      <label htmlFor={ name }>
        {label}
        <input
          id={ name }
          name={ name }
          type={ type }
          value={ value }
          onChange={ this.handleExpense }
        />
      </label>
    );
  }

  updateTotalExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce(
      (acc, expense) => {
        const { value, exchangeRates, currency } = expense;
        const exchangeRate = Number(exchangeRates[currency].ask);
        return acc + Number(value) * exchangeRate;
      },
      0,
    ).toFixed(2);
    return totalExpenses;
  }

  async saveExpense(event) {
    event.preventDefault();
    const { updateCurrencies } = this.props;
    await updateCurrencies();
    const { addNewExpense, currencies: exchangeRates,
      currentId: id, updateExpense } = this.props;
    const { currentExpense, isEditing, editingExpense } = this.state;
    const newExpense = {
      id,
      ...currentExpense,
      exchangeRates,
    };
    if (isEditing) {
      const expenseToUpdate = {
        id: editingExpense.id,
        ...currentExpense,
        exchangeRates: editingExpense.exchangeRates,
      };
      updateExpense(expenseToUpdate);
    } else { addNewExpense(newExpense); }
    const { initialFormExpense } = this.state;
    this.setState({ currentExpense: initialFormExpense, isEditing: false });
  }

  formToInserExpense() {
    const {
      currentExpense: { value, description, currency, method, tag },
    } = this.state;
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const paymentOptions = ['dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies } = this.props;
    const currenciesList = Object.keys(currencies).filter((type) => type !== 'USDT');
    const { generateInput, generateSelect } = this;
    return (
      <form>
        {generateInput('Valor', 'value', 'number', value)}
        {generateInput('Descrição', 'description', 'text', description)}
        {generateSelect('Moeda', 'currency', currenciesList, currency)}
        {generateSelect(
          'Método de pagamento',
          'method',
          paymentOptions,
          method,
        )}
        {generateSelect('Tag', 'tag', tagOptions, tag)}
        <button type="submit" onClick={ this.saveExpense }>Adicionar despesa</button>
      </form>
    );
  }

  loaldToEdition(id) {
    const { expenses } = this.props;
    const editingExpense = expenses.find((expense) => expense.id === id);
    const { value, description, tag, currency, method } = editingExpense;
    this.setState({
      isEditing: true,
      editingExpense,
      currentExpense: { value, description, tag, currency, method },
    });
  }

  render() {
    const { email, isLoalding } = this.props;
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <section>
            <div>
              Email:
              <span data-testid="email-field">{ email }</span>
            </div>
            <div>
              Despesa total:
              <span data-testid="header-currency-field">BRL</span>
              <span data-testid="total-field">{ this.updateTotalExpenses() }</span>
            </div>
          </section>
          {
            isLoalding
              ? <h1>Carregado</h1>
              : <h1>Insira sua depesa</h1>
          }
          {this.formToInserExpense()}
        </header>
        <ExpensesTable loaldToEdition={ this.loaldToEdition } />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  isLoalding: state.wallet.isLoalding,
  currentId: state.wallet.currentId,
});

const mapDispachToProps = (dispach) => ({
  updateCurrencies: () => dispach(fetchCurrencies()),
  addNewExpense: (newExpense) => dispach(addExpense(newExpense)),
  removeExpense: (id) => dispach(delExpense(id)),
  updateExpense: (expenseToUpdate) => dispach(editExpense(expenseToUpdate)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  updateCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.shape(PropTypes.object)).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoalding: PropTypes.bool.isRequired,
  currentId: PropTypes.number.isRequired,
  addNewExpense: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Wallet);
