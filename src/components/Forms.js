import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpense } from '../actions';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.allCurrencies = this.allCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCurrenciesUpdate = this.getCurrenciesUpdate.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],

    };
  }

  componentDidMount() {
    this.getCurrenciesUpdate();
  }

  async getCurrenciesUpdate() {
    const { fetchCurrenciesHeader } = this.props;
    await fetchCurrenciesHeader();
    this.allCurrencies();
  }

  allCurrencies() {
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  currencies() {
    const { exchangeRates } = this.state;
    const deleteCurrency = 'USDT';

    delete exchangeRates[deleteCurrency];

    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency" onChange={ this.handleChange }>
          { Object.values(exchangeRates).map((currency) => (
            <option
              key={ currency.code }
              value={ currency.code }
            >
              { currency.code }
            </option>)) }
        </select>
      </label>
    );
  }

  handleChange(event) {
    const { id, value } = event.target;
    if (id === 'value') {
      this.setState({ [id]: value });
    } else {
      this.setState({ [id]: value });
    }
  }

  async handleClick() {
    const { addToExpenses, expenseIdAdd } = this.props;
    await this.setState({ id: expenseIdAdd });
    addToExpenses(this.state);
    this.getCurrenciesUpdate();
  }

  render() {
    // console.log(this.props.userExpenses.length);
    return (
      <>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" onChange={ this.handleChange } />
          </label>

          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ this.handleChange } />
          </label>

          {this.currencies()}

          <label htmlFor="method">
            Método de pagamento
            <select id="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
        <button
          type="submit"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  userExpenses: state.wallet.expenses,
  expenseIdAdd: state.wallet.expenseId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesHeader: () => dispatch(fetchCurrencies()),
  addToExpenses: (componentState) => dispatch(addExpense(componentState)),
});

Forms.propTypes = {
  currencies: PropTypes.array,
  fetchCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
