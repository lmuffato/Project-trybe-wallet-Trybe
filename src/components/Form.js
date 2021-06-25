import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apiWalletThunk, apiExpensesThunk } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.hc = this.hc.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    this.getUpdate();
  }

  async getUpdate() {
    const { addWalletCurrency } = this.props;
    await addWalletCurrency;
    this.getCurrencies();
  }

  getCurrencies() {
    const { currencies } = this.props;
    this.setState({ exchangeRates: currencies });
  }

  hc(event) { // handleChange!!!!
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  handleClick() {
    const { addExpense, getExpenses } = this.props;
    // if (getExpenses.length > 0) {
    this.setState({ id: getExpenses.length + 1 });
    // }
    addExpense(this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const codeCurrency = Object.keys(currencies)
      .filter((currencie) => currencie !== 'USDT');
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" value={ value } onChange={ this.hc } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" value={ description } onChange={ this.hc } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" value={ currency } onChange={ this.hc }>
              {codeCurrency.map((currencyCode) => (
                <option key={ currencyCode } value={ currencyCode }>
                  { currencyCode }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" value={ method } onChange={ this.hc }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" value={ tag } onChange={ this.hc }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addWalletCurrency: () => dispatch(apiWalletThunk()),
  addExpense: (state) => dispatch(apiExpensesThunk(state)),
});

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
  getExpenses: expenses,
});

Form.propTypes = {
  getExpenses: PropTypes.array,
  currencies: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
