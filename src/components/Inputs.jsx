import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { apiCurrencyThunk, expensesThunk } from '../actions/index';
// reference: https://pt-br.reactjs.org/docs/forms.html
// ideia das currencies tirada do projeto de Pollyana Oliveira 10a
// DEPOIS DE BATER CABEÇA POR 3 HORAS EM UM DOMINGO, LUAN RAMALHO TURMA 10A, descobriu o meu erro em não colocar USD NO estado currency. Dessa forma quando adiciona alguma coisa em dolar eu recebia um string vazia. OBRIGADO MEU CARO COLEGA POR ESSA AJUDA.

class Inputs extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChang = this.handleChang.bind(this);
  }

  componentDidMount() {
    const { apiCurrency } = this.props;
    apiCurrency();
  }

  handleChang({ target: { id, value } }) {
    const { expenses } = this.props;
    this.setState({
      [id]: value,
      id: expenses.length,
    });
  }

  currencyOptions() {
    const { currencies } = this.props;
    // console.log(currencies);
    const getCurrencies = Object.keys(currencies);
    const cur = getCurrencies.filter((coin) => coin !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda:
        <select type="text" id="currency" onChange={ this.handleChang }>
          {cur
            .map((currency, id) => (
              <option key={ id } value={ currency }>
                {currency}
              </option>))}
        </select>
      </label>
    );
  }

  form() {
    const { addExpenses } = this.props;
    return (
      <form>
        <label htmlFor="value">
          valor:
          <input type="text" id="value" onChange={ this.handleChang } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            onChange={ this.handleChang }
          />
        </label>
        { this.currencyOptions() }
        <label htmlFor="method">
          Método de pagamento:
          <select type="text" id="method" onChange={ this.handleChang }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select type="text" id="tag" onChange={ this.handleChang }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ () => { addExpenses(this.state); } }>
          Adicionar despesa
        </button>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.form()}
      </div>
    );
  }
}

Inputs.propTypes = {
  apiCurrency: func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  apiCurrency: (payload) => dispatch(apiCurrencyThunk(payload)),
  addExpenses: (payload) => dispatch(expensesThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
