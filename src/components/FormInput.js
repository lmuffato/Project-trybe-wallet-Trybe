import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getApi from '../services/api';
import { wallet, currencies } from '../actions';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraApi: [],
      metPag: [],
      tag: [],
      count: 0,
      expenses: {},
    };

    this.getInformation = this.getInformation.bind(this);
    this.method = this.method.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.getInformation();
    this.method();
  }

  async getInformation() {
    const api = await getApi();
    return (this.setState({ arraApi: Object.entries(api) }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { arraApi, expenses, count } = this.state;
    this.setState({
      expenses: {
        ...expenses,
        id: count,
        [name]: value,
        exchangeRates: arraApi
          .map((e) => ({
            [e[1].code]: { code: e[1].code, name: e[1].name, ask: e[1].ask } })),
      },
    });
  }

  updateId(i) {
    this.setState({
      count: i += 1,
    });
  }

  sumCurrency(e) {
    const { fromCurrencies, toCurrency } = this.props;
    const magicN = 10;
    const magicN2 = -2;
    const n = parseFloat(fromCurrencies, magicN) + parseFloat(e, magicN);
    toCurrency((Math.round((n * 100), magicN2) / 100));
  }

  submit(event) {
    event.preventDefault();
    const { expenses, count } = this.state;
    this.updateId(count);
    const { toExpenses } = this.props;
    toExpenses(expenses);
    this.sumCurrency(expenses.value);
  }

  method() {
    return this.setState({
      metPag: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    });
  }

  render() {
    const { arraApi, metPag, tag } = this.state;
    return (
      <form onSubmit={ this.submit }>
        <label htmlFor="value">
          Valor
          <input
            name="value"
            type="text"
            placeholder="Hom much...? Ex: xx.xx"
            onChange={ this.handleChange }
            required="required"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            placeholder="What...?"
            onChange={ this.handleChange }
            required="required"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" onChange={ this.handleChange } required="required">
            <option value="" data-default disabled selected>Whith...?</option>
            { arraApi.map((e, i) => (e[0] !== 'USDT'
              ? <option key={ i } name={ e[0] }>{ e[0] }</option> : '')) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" onChange={ this.handleChange } required="required">
            <option value="" data-default disabled selected>How...?</option>
            { metPag.map((e, i) => <option key={ i } name={ e }>{ e }</option>) }
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select name="tag" onChange={ this.handleChange } required="required">
            <option value="" data-default disabled selected>About...?</option>
            { tag.map((e, i) => <option key={ i } name={ e }>{ e }</option>) }
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  fromWallet: state.wallet.expenses,
  fromCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  toExpenses: (payload) => dispatch(wallet(payload)),
  toCurrency: (payload) => dispatch(currencies(payload)),
});

FormInput.propTypes = {
  toExpenses: PropTypes.oneOf(
    PropTypes.object,
    PropTypes.array,
  ).isRequired,
  toCurrency: PropTypes.number.isRequired,
  fromCurrencies: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
