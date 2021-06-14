import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThunk, setExpenses } from '../actions';
import '../Wallet.css';

class Wallet extends Component {
  constructor() {
    super();
    this.createStateValues = this.createStateValues.bind(this);
    this.state = {
      expenses: [],
    };
  }

  componentDidMount() {
    const { requestFetch } = this.props;
    return requestFetch();
  }

  async createStateValues(evt) {
    evt.preventDefault();
    // console.log(evt.target.firstChild.firstElementChild.value);
    // console.log(document.querySelectorAll('input')[0].value);
    // console.log(document.querySelectorAll('input')[1].value);
    // console.log(document.querySelectorAll('select')[0].value);
    // console.log(document.querySelectorAll('select')[1].value);
    // console.log(document.querySelectorAll('select')[2].value);
    const { state: { expenses }, props: { exchangeRates, newReduxState } } = this;
    if (expenses.length > 0) {
      this
        .setState((prev) => ({ expenses: [{ id: prev.expenses[0].id + 1 }] }));
      const inputs = document.querySelectorAll('input');
      inputs.forEach(({ name, value }) => this
        .setState((prev) => ({ expenses: [{ ...prev.expenses, [name]: value }] })));
      const selects = document.querySelectorAll('select');
      selects.forEach(({ name, value }) => this
        .setState((prev) => ({ expenses: [{ ...prev.expenses, [name]: value }] })));
      await this.setState((prev) => ({ expenses: [{ ...prev.expenses, exchangeRates }] }));
      console.log(this.state.expenses);
      return newReduxState(this.state.expenses);
    }
    this
      .setState(({ expenses: [{ id: 0 }] }));

    const inputs = document.querySelectorAll('input');
    inputs.forEach(({ name, value }) => this
      .setState((prev) => ({ expenses: [{ ...prev.expenses[0], [name]: value }] })));
    const selects = document.querySelectorAll('select');
    selects.forEach(({ name, value }) => this
      .setState((prev) => ({ expenses: [{ ...prev.expenses[0], [name]: value }] })));
    await this.setState((prev) => ({ expenses: [{ ...prev.expenses[0], exchangeRates }] }));
    console.log(this.state.expenses);
    return newReduxState(this.state.expenses);
  }

  render() {
    const { props: { personEmail, currencies }, createStateValues } = this;
    return (
      <>
        <div className="flex-container">
          <header data-testid="email-field">
            {personEmail}
          </header>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{0}</span>
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
              <option value="dinheiro" selected>Dinheiro</option>
              <option value="cartão-de-crédito">Cartão de crédito</option>
              <option value="Cartão-de-débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option value="alimentação" selected>Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  personEmail: PropTypes.string.isRequired,
  requestFetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  personEmail: state.user.email,
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.expenses[0].exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  requestFetch: () => dispatch(fetchThunk()),
  newReduxState: (data) => dispatch(setExpenses(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
