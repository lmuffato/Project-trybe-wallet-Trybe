import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, expensesAdd } from '../actions';
// ajuda IMENSA do colega Guiherme pra entender pq nunca passava no teste

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
  }

  componentDidMount() {
    const { saveCurrency } = this.props;
    saveCurrency();
  }

  handleChange({ target: { id, value } }) {
    const { expenses } = this.props;
    this.setState({
      [id]: value,
      id: expenses.length,
    });
  }// trocar name por ID

  listCurrencies() {
    const { currencies } = this.props;
    const listKeys = Object.keys(currencies).filter((currency) => currency !== 'USDT');
    // constante monta a lista de com o resultado das chaves da API, tirando a chave "usdt"

    return (
      // select moeda e forms montados antes de renderizar
      <label htmlFor="currency">
        Moeda:
        <select type="text" id="currency" onChange={ this.handleChange }>
          {listKeys
            .map((currency, id) => (
              <option key={ id } value={ currency }>
                {currency}
              </option>))}
        </select>
      </label>
    );
  }

  form() {
    const { addExpense } = this.props;
    return (
      <form>
        <label htmlFor="value">
          valor:
          <input type="text" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        { this.listCurrencies() }
        <label htmlFor="method">
          Método de pagamento:
          <select type="text" id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select type="text" id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ () => { addExpense(this.state); } }>
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

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(fetchCurrency()),
  addExpense: () => dispatch(expensesAdd()),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Forms.propTypes = {
  saveCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
