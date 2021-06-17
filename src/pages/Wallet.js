import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrenciesThunk, fetchExchangeRatesThunk, setExpenses } from '../actions';
import Table from '../Components/Table';
import '../Wallet.css';

class Wallet extends Component {
  constructor() {
    super();
    this.updateTotal = this.updateTotal.bind(this);
    this.createStateValues = this.createStateValues.bind(this);
    this.state = {
      expenses: [],
      total: 0,
    };
  }

  componentDidMount() {
    const { requestCurrencies } = this.props;
    return requestCurrencies();
  }

  updateTotal() {
    const { props: { expenses }, state: { total } } = this;
    expenses.forEach(({ value: v, currency: c, exchangeRates }) => {
      this.setState((pre) => (
        { ...pre,
          total: (Math
            .round((total + (Number(v) * exchangeRates[c].ask)) * 100) / 100) }));
    });
  }

  async createStateValues(evt) {
    evt.preventDefault();
    const { state: { expenses }, props: { newReduxState, requestExchangeRates } } = this;
    if (expenses.length > 0) {
      this
        .setState((prev) => ({ expenses: [{ id: prev.expenses[0].id + 1 }] }));
    } else {
      this
        .setState(({ expenses: [{ id: 0 }] }));
    }
    const inputs = document.querySelectorAll('input');
    inputs.forEach(({ name, value }) => this
      .setState((prev) => ({ expenses: [{ ...prev.expenses[0], [name]: value }] })));
    const selects = document.querySelectorAll('select');
    selects.forEach(({ name, value }) => this
      .setState((prev) => ({ expenses: [{ ...prev.expenses[0], [name]: value }] })));
    await requestExchangeRates();
    const { props: { exchangeRates } } = this;
    await this.setState((pre) => ({ expenses: [{ ...pre.expenses[0], exchangeRates }] }));
    // console.log(this.state.expenses);
    const { state: { expenses: oneHundredPercentUpdated } } = this;
    await newReduxState(oneHundredPercentUpdated); // é ruim de aturar! Bomba patch virou moda...
    return this.updateTotal();
  }

  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { props: { personEmail, currencies, expenses },
      state: { total }, createStateValues } = this;
    return (
      <>
        <div className="flex-container">
          <header data-testid="email-field">
            {personEmail}
          </header>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{ total }</span>
        </div>
        <form className="fieldset" onSubmit={ createStateValues }>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" name="value" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input id="descrição" type="text" name="description" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="currency">
              {currencies.map((curr) => <option key={ curr }>{curr}</option>)}
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento:
            <select id="metodoDePagamento" name="method">
              {payments.map((pay) => <option key={ pay } value={ pay }>{pay}</option>)}
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              {tags.map((tag) => <option key={ tag } value={ tag }>{tag}</option>)}
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>
        <Table expenses={ expenses } />
      </>
    );
  }
}

Wallet.propTypes = {
  requestCurrencies: PropTypes.func.isRequired,
  requestExchangeRates: PropTypes.func.isRequired,
  newReduxState: PropTypes.func.isRequired,
  personEmail: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  exchangeRates: PropTypes.shape({}).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  personEmail: state.user.email,
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.exchangeRates,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrencies: () => dispatch(fetchCurrenciesThunk()),
  requestExchangeRates: () => dispatch(fetchExchangeRatesThunk()),
  newReduxState: (data) => dispatch(setExpenses(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
