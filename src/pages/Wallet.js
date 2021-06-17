import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins as getCoinsThunk, setExpense as setExpenseThunk }
  from '../actions/index';
import { fetchAPI } from '../services/fetchAPI';
import TableWallet from '../components/TableWallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: { },
    };
    this.handleClick = this.handleClick.bind(this);
    this.returnValueInput = this.returnValueInput.bind(this);
    this.returnDescriptionInput = this.returnDescriptionInput.bind(this);
    this.returnCurrencyInput = this.returnCurrencyInput.bind(this);
    this.returnMethodPayment = this.returnMethodPayment.bind(this);
    this.returnTag = this.returnTag.bind(this);
    this.fetchRate = this.fetchRate.bind(this);
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
    // this.fetchRate();
  }

  async fetchRate() {
    const rates = await fetchAPI();
    this.setState({
      exchangeRates: rates,
    });
  }

  async handleClick(e) {
    e.preventDefault();
    await this.fetchRate();
    // const { value, description, currency, method, tag, exchangeRates } = this.state;
    // console.log(`${value}, ${description}, ${currency}, ${method}, ${tag}`);
    const { expenses } = this.props;
    // console.log(expenses);
    // fazer requisição de api (é feita no componentDidMouny)
    // criando objeto que será posto no estado global
    const payload = {
      ...this.state,
      id: expenses.length,
    };
    // const {  as getRatesThunk } = this.props;
    // console.log(payload);
    // getRatesThunk(payload);
    const { setExpense } = this.props;
    setExpense(payload);
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    // const rates = getRates();
    // console.log(rates);
  }

  handelChange(event) {
    const { target: { name } } = event;
    this.setState({
      [name]: event.target.value,
    });
  }

  returnValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          onChange={ (e) => this.handelChange(e) }
          type="text"
          name="value"
          id="value"
          value={ value }
        />
      </label>
    );
  }

  returnDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          onChange={ (e) => this.handelChange(e) }
          type="text"
          name="description"
          id="description"
          value={ description }
        />
      </label>
    );
  }

  returnCurrencyInput() {
    const { currencies } = this.props;
    const { currency } = this.state;
    const currenciesKeys = Object.keys(currencies);
    return (
      <label htmlFor="currency">
        Moeda
        <select
          type="select"
          name="currency"
          id="currency"
          onChange={ (e) => this.handelChange(e) }
          value={ currency }
        >
          {
            currenciesKeys.map((currencyU) => (
              <option
                key={ currencyU }
                value={ currencyU }
              >
                { currencyU }
              </option>))
          }
        </select>
      </label>
    );
  }

  returnMethodPayment() {
    const { method } = this.state;
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          onChange={ (e) => this.handelChange(e) }
          type="select"
          name="method"
          id="payment-method"
          value={ method }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  returnTag() {
    return (
      <label htmlFor="category">
        Tag
        <select
          onChange={ (e) => this.handelChange(e) }
          type="select"
          name="tag"
          id="category"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email, totalAmount } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">{ totalAmount || 0 }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          { this.returnValueInput() }
          { this.returnDescriptionInput() }
          { this.returnCurrencyInput() }
          { this.returnMethodPayment() }
          { this.returnTag() }
          <button
            type="button"
            onClick={ (e) => this.handleClick(e) }
          >
            Adicionar despesa
          </button>
        </form>
        <TableWallet />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  totalAmount: state.wallet.totalAmount,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsThunk()),
  setExpense: (payload) => dispatch(setExpenseThunk(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  getCoins: PropTypes.func,
  currencies: PropTypes.object,
}.isRequerid;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
