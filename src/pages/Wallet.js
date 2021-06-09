import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExpense: {
        value: 0,
        description: 'teste',
        currency: 'BRL',
        paymentMode: 'Dinheiro',
        tag: '',
      },
    };
    this.formToInserExpense = this.formToInserExpense.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.generateInput = this.generateInput.bind(this);
    this.generateSelect = this.generateSelect.bind(this);
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
          name={ name }
          type={ type }
          value={ value }
          onChange={ this.handleExpense }
        />
      </label>
    );
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
        {generateInput('Valor:', 'value', 'number', value)}
        {generateInput('Descrição:', 'description', 'text', description)}
        {generateSelect('Moeda:', 'currency', currenciesList, currency)}
        {generateSelect(
          'Método de pagamento:',
          'paymentMode',
          paymentOptions,
          paymentMode,
        )}
        {generateSelect('Tag:', 'tag', tagOptions, tag)}
      </form>
    );
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
              <span data-testid="total-field">0</span>
            </div>
          </section>
          {
            isLoalding
              ? <h1>Carregado</h1>
              : <h1>Insira sua depesa</h1>
          }
        </header>
        {this.formToInserExpense()}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  isLoalding: state.wallet.isLoalding,
});

const mapDispachToProps = (dispach) => ({
  updateCurrencies: () => dispach(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  updateCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.shape(PropTypes.object)).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoalding: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Wallet);
