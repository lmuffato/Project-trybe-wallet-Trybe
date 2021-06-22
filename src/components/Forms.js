import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, addExpense } from '../actions';
// ajuda IMENSA do colega Guiherme pra entender pq nunca passava no teste
// Agradeço a amiga do <3 Nathi e o Rafa Medeiros pela paciência e ajuda

class Forms extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.listCurrencies = this.listCurrencies.bind(this);
  }

  componentDidMount() {
    const { saveCurrency } = this.props;
    saveCurrency();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  listCurrencies() {
    const { currencies, expenseDispatch, saveCurrency } = this.props;
    saveCurrency();
    const newExpenses = {
      ...this.state,
      exchangeRates: currencies,
    };
    expenseDispatch(newExpenses);
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  render() {
    const { currencies } = this.props;
    const listKeys = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    // constante monta a lista de com o resultado das chaves da API, tirando a chave "usdt"

    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            {listKeys.map((currencyKey) => (
              <option key={ currencyKey }>{ currencyKey }</option>))}
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="typeOfExpense">
          Tag
          <select id="typeOfExpense" name="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição
          <input id="descricao" name="description" onChange={ this.handleChange } />
        </label>

        <button type="button" onClick={ this.listCurrencies }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(fetchCurrency()),
  expenseDispatch: (expenses) => dispatch(addExpense(expenses)),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Forms.propTypes = {
  saveCurrency: func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
