import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import { addExpense, deleteExpense } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { stateID } = this.props;

    this.state = {
      id: stateID,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.filterCurrencies = this.filterCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.excludeButton = this.excludeButton.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { id } = this.state;
    const { dispatchExpense } = this.props;
    this.fetchCurrencies();
    dispatchExpense(this.state);
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    });
  }

  excludeButton(expenseID) {
    const { excludeExpense } = this.props;
    return (
      <button
        type="button"
        onClick={ () => excludeExpense(expenseID) }
        data-testid="delete-btn"
      >
        Excluir
      </button>);
  }

  async fetchCurrencies() {
    const currAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await currAPI.json();
    this.setState({
      exchangeRates: response,
    });
  }

  filterCurrencies() {
    const { exchangeRates } = this.state;
    const currencies = Object.keys(exchangeRates);
    const filteredCurrencies = currencies.filter((currency) => currency !== 'USDT');
    return filteredCurrencies;
  }

  // Tabela criada tomando por referência a Tabela criada pelo colega de turma Derik Andrade [https://github.com/tryber/sd-010-a-project-trybewallet/pull/120/commits/4855ce2c2a05ba8d47d84da246a164d2e7b9a181]

  render() {
    const { expenses } = this.props;
    return (
      <>
        <Header />
        <ExpensesForm
          currencies={ this.filterCurrencies() }
          handler={ this.handleChange }
          submitExpense={ this.handleClick }
        />
        <table>
          <tbody>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            { expenses.map((expense) => {
              const { currency, value, id, tag, method, description } = expense;
              const currencyName = expense.exchangeRates[currency].name;
              const currentCurrency = expense.exchangeRates[currency].ask;
              const usedCurrency = parseFloat(currentCurrency).toFixed(2);
              const convertedValue = (parseFloat(value)
                * parseFloat(currentCurrency)).toFixed(2);
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ currencyName }</td>
                  <td>{ usedCurrency }</td>
                  <td>{ convertedValue }</td>
                  <td>Real</td>
                  { this.excludeButton(id) }
                </tr>);
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  stateID: state.wallet.id,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (expenseData) => dispatch(addExpense(expenseData)),
  excludeExpense: (expenseID) => dispatch(deleteExpense(expenseID)),
});

Wallet.propTypes = {
  stateID: PropTypes.number.isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  excludeExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
