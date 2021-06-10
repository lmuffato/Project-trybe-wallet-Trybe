import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExpense: {
        value: 0,
        description: 'teste',
        currency: 'USD',
        paymentMode: 'Cartão de crédito',
        tag: 'Alimentação',
      },
      totalExpenses: 0,
    };
    this.formToInserExpense = this.formToInserExpense.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.generateInput = this.generateInput.bind(this);
    this.generateSelect = this.generateSelect.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.updateTotalExpenses = this.updateTotalExpenses.bind(this);
    this.expensesTable = this.expensesTable.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.deleteExpense = this.deleteExpense(this);
  }

  componentDidMount() {
    const { updateCurrencies } = this.props;
    updateCurrencies();
  }

  handleExpense({ target: { name, value } }) {
    const newValue = (name === 'value') ? parseFloat(value).toFixed(2) : value;
    this.setState((previusState) => ({
      currentExpense: { ...previusState.currentExpense, [name]: newValue },
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
        const exchangeRate = parseFloat(exchangeRates[currency].ask);
        return acc + value * exchangeRate;
      },
      0,
    ).toFixed(2);
    this.setState({ totalExpenses });
  }

  async saveExpense(event) {
    event.preventDefault();
    const { updateCurrencies } = this.props;
    await updateCurrencies();
    const { addNewExpense, currencies: exchangeRates, currentId: id } = this.props;
    const { currentExpense } = this.state;
    const newExpense = {
      id,
      ...currentExpense,
      exchangeRates,
    };
    addNewExpense(newExpense);
    this.updateTotalExpenses();
  }

  formToInserExpense() {
    const {
      currentExpense: { value, description, currency, paymentMode, tag },
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
          'paymentMode',
          paymentOptions,
          paymentMode,
        )}
        {generateSelect('Tag', 'tag', tagOptions, tag)}
        <button type="submit" onClick={ this.saveExpense }>Adicionar despesa</button>
      </form>
    );
  }

  editExpense(id) {
    console.log(id);
  }

  deleteExpense(id) {
    console.log(id);
  }

  expensesTable() {
    const { expenses } = this.props;
    const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <tr>
          {tableHeader.map((collunTitle, index) => (
            <th key={ index }>{ collunTitle }</th>
          ))}
        </tr>
        {expenses.map((expense) => {
          const { value, description, currency,
            paymentMode, tag, exchangeRates, id } = expense;
          const exchangeRate = parseFloat(exchangeRates[currency].ask).toFixed(2);
          const convertedValue = (exchangeRate * value).toFixed(2);
          const currencyName = exchangeRates[currency].name.split('/')[0];
          return (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{paymentMode}</td>
              <td>{value}</td>
              <td>{currencyName}</td>
              <td>{exchangeRate}</td>
              <td>{convertedValue}</td>
              <td>Real</td>
              <td>
                <button type="button" onClick={ () => this.editExpense(id) }>
                  Editar
                </button>
                <button type="button" onClick={ () => this.deleteExpense(id) }>
                  Excluir
                </button>
              </td>
            </tr>
          );
        })}

      </table>
    );
  }

  render() {
    const { email, isLoalding } = this.props;
    const { totalExpenses } = this.state;
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
              <span data-testid="total-field">{ totalExpenses }</span>
            </div>
          </section>
          {
            isLoalding
              ? <h1>Carregado</h1>
              : <h1>Insira sua depesa</h1>
          }
          {this.formToInserExpense()}
        </header>
        {this.expensesTable()}
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
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  updateCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.shape(PropTypes.object)).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoalding: PropTypes.bool.isRequired,
  currentId: PropTypes.number.isRequired,
  addNewExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Wallet);
