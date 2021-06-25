import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Textinput from './Textinput';
import { addExpense, getCurrenciesThunk } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { getCurrencies, currencies, addExpenses, expenses } = this.props;
    await getCurrencies();
    this.setState({ id: expenses.length, exchangeRates: currencies });
    addExpenses(this.state);
  }

  render() {
    const { currencies } = this.props;
    const currenciesAcronyms = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return (
      <form>
        <Textinput onChange={ this.handleChange } />
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            { currenciesAcronyms.map((currencyAcronym) => (
              <option key={ currencyAcronym } value={ currencyAcronym }>
                { currencyAcronym }
              </option>)) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  addExpenses: (payload) => dispatch(addExpense(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
