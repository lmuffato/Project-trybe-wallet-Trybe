import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newExpense } from '../actions/index';
/* Ao entrar na página /carteira, você deverá fazer uma requisição para a API das moedas e preencher as opções do <select> de "Moedas" com os valores retornados. Utilizando as siglas das moedas. /Linha 33/ */
/* As opções devem conter os valores: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH' e 'XRP'. /Linha 17/ */
/* 8. Desenvolva a opção de "Adicionar despesa" na sua tabela de gastos */

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { initialID } = this.props;
    this.state = {
      id: initialID,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const APIfetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await APIfetch.json();
    this.setState({ exchangeRates });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  inputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          name="value"
          value={ value }
          type="number"
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  inputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          name="description"
          id="description"
          value={ description }
          onChange={ (event) => this.handleChange(event) }
        />
      </label>
    );
  }

  selectCurrency() {
    const { currency, exchangeRates } = this.state;
    const currencies = Object.keys(exchangeRates);
    const filteredCurrency = currencies.filter((curency) => curency !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ (event) => this.handleChange(event) }
        >
          {filteredCurrency
            .map((moeda) => <option key={ moeda } value={ moeda }>{moeda}</option>)}
        </select>
      </label>
    );
  }

  paymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          type="select"
          id="method"
          value={ method }
          name="method"
          onChange={ (event) => this.handleChange(event) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectTAG() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          type="select"
          id="tag"
          value={ tag }
          name="tag"
          onChange={ (event) => this.handleChange(event) }
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

  handleClick() {
    const { id } = this.state;
    const { dispatchExpenses } = this.props;
    dispatchExpenses(this.state);
    this.setState(
      {
        /* Req 8 - O id da despesa deve ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.
        As despesas salvas no Redux ficarão com um formato semelhante ao seguinte: */
        id: id + 1,
        value: 0,
        description: '',
        currency: 'USD',
        method: '',
        tag: '',
        exchangeRates: {},
      },
    );
    this.fetchCurrency();
  }

  render() {
    return (
      <form>
        {this.inputValue()}
        {this.inputDescription()}
        {this.selectCurrency()}
        {this.paymentMethod()}
        {this.selectTAG()}
        {/* Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão,
        as seguintes ações sejam executadas: */}
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar Despesa!
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  initialID: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (payload) => dispatch(newExpense(payload)),
});

Form.propTypes = {
  initialID: PropTypes.number.isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
