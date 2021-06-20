import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Value from '../components/Value';
import Description from '../components/Description';
import Currency from '../components/Currency';
import PaymentMethod from '../components/PaymentMethod';
import Tags from '../components/Tags';
import { addExpense, apiCurrency, buttonRemove, sumTotal } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.newExpenses = this.newExpenses.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.createExpense = this.createExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
  }

  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async newExpenses() {
    const { value, description, currency, method, tag } = this.state;
    const { fetchApi, Total, expenses, listExpenses, totalValue = 0 } = this.props;
    await fetchApi();
    const { apiCoin } = this.props;
    const sumTotalValue = totalValue + value * apiCoin[currency].ask;
    Total(sumTotalValue);
    expenses({
      id: listExpenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: apiCoin,
    });
  }

  removeExpense(id) {
    let total = 0;
    const { listExpenses, remove, Total } = this.props;
    const newArray = [];
    listExpenses.forEach((expense) => {
      if (expense.id !== id) {
        const { exchangeRates, currency, value } = expense;
        total += exchangeRates[currency].ask * value;
        newArray.push(expense);
      }
    });
    Total(total);
    remove(newArray);
  }

  createExpense() {
    const { listExpenses } = this.props;
    if (listExpenses[0]) {
      return (
        listExpenses.map((expense, index) => {
          const { id, value, description, currency,
            method, tag, exchangeRates } = expense;
          const quote = Number(exchangeRates[currency].ask);
          const real = quote * value;
          const name = (exchangeRates[currency].name).split('/')[0];
          return (
            <tr key={ index }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ name }</td>
              <td>{ quote.toFixed(2) }</td>
              <td>{ real.toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.removeExpense(id) }
                >
                  Remover Despesa
                </button>
              </td>
            </tr>
          );
        }));
    }
  }

  renderOptions() {
    const menu = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão'];
    return (
      <tbody>
        <tr>
          {menu.map((item, index) => <th key={ index }>{item}</th>)}
          <th>Editar/Excluir</th>
        </tr>
      </tbody>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <Value handleChange={ this.handleChange } />
          <Description handleChange={ this.handleChange } />
          <Currency handleChange={ this.handleChange } />
          <PaymentMethod handleChange={ this.handleChange } />
          <Tags handleChange={ this.handleChange } />
          <button
            type="button"
            onClick={ () => this.newExpenses() }
          >
            Adicionar despesas
          </button>
        </form>
        <table>
          { this.renderOptions() }
          <tbody>
            { this.createExpense() }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(apiCurrency()),
  expenses: (payload) => dispatch(addExpense(payload)),
  Total: (payload) => dispatch(sumTotal(payload)),
  remove: (payload) => dispatch(buttonRemove(payload)),
});

const mapStateToProps = (state) => ({
  apiCoin: state.wallet.currencies,
  listExpenses: state.wallet.expenses,
  totalValue: state.wallet.total,
});

Wallet.propTypes = {
  fetchApi: PropTypes.func.isRequired,
  Total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
  listExpenses: PropTypes.arrayOf(Object).isRequired,
  totalValue: PropTypes.number.isRequired,
  apiCoin: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
