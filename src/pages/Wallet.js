import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategorySelect from '../components/categorySelect';
import PaymentSelect from '../components/paymentSelect';
import { API_CURRENCY, actionSaveExpense, actionSaveTotal } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.loadCurrencySelect = this.loadCurrencySelect.bind(this);
    this.change = this.change.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.loadExpenses = this.loadExpenses.bind(this);

    this.state = {
      value: '1',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      key: 0,
    };
  }

  componentDidMount() {
    const { apiEconomia } = this.props;
    apiEconomia();
  }

  loadCurrencySelect() {
    const { apiResult } = this.props;
    const results = apiResult;
    const currencyList = [];

    if (apiResult) {
      Object.keys(results).map((result) => {
        if (result !== 'USDT') {
          currencyList.push(result);
        }
        return true;
      });
    }

    return (
      currencyList.map(
        (currency, index) => <option key={ index } value={ currency }>{currency}</option>,
      )
    );
  }

  change({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async addExpense() {
    const { value, description, currency,
      method, tag, key } = this.state;

    const { apiEconomia, saveExpense, saveTotal, total = 0 } = this.props;
    await apiEconomia();

    const { apiResult } = this.props;
    const obj = apiResult;

    const exchangeRates = obj[currency].ask;
    const totalValue = total + value * exchangeRates;
    saveTotal(totalValue);
    saveExpense(
      { id: key,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      },
    );

    this.setState({ key: key + 1 });
  }

  loadExpenses() {
    const { getExpenses } = this.props;
    const expenses = getExpenses;
    if (getExpenses[0]) {
      // getExpenses.map(() => )
      return (
        expenses.map(
          (expense, index) => (
            <li key={ index }>
              {/* {expense.description}
              {expense.tag}
              {expense.method}
              {expense.value}
              {expense.currency}
              {expense.exchangeRates} */}
              {`${expense.description}
              ${expense.tag}
              ${expense.method}
              ${expense.value}
              ${expense.currency}
              ${expense.exchangeRates}`}
            </li>
          ),
        )
      );
      // console.log(expenses);
    }
  }

  render() {
    const { myEmail, total } = this.props;
    return (
      <div>
        Trybe
        <header>
          <span data-testid="email-field">
            Email:
            {myEmail}
          </span>
          <span data-testid="total-field">
            Despesa total:
            {total}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <form>
          <label htmlFor="idValue">
            Valor
            <input type="number" name="value" id="idValue" onChange={ this.change } />
          </label>
          <label htmlFor="idDesc">
            Descrição
            <input type="text" name="description" id="idDesc" onChange={ this.change } />
          </label>
          <label htmlFor="idCurrency">
            Moeda
            <select id="idCurrency" name="currency" onChange={ this.change }>
              {this.loadCurrencySelect()}
            </select>
          </label>
          <PaymentSelect change={ this.change } />
          <CategorySelect change={ this.change } />
        </form>
        <button type="button" onClick={ this.addExpense }>Adicionar Despesa</button>
        <ul>
          <li>
            Descrição Tag Método de Pagamento Valor Moeda
            Câmbio Utilizado Valor Convertido Moeda de Conversão
          </li>
          {this.loadExpenses()}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  apiEconomia: () => dispatch(API_CURRENCY()),
  saveExpense: (value) => dispatch(actionSaveExpense(value)),
  saveTotal: (value) => dispatch(actionSaveTotal(value)),
});

const mapStateToProps = (state) => ({
  myEmail: state.user.email,
  getExpenses: state.wallet.expenses,
  apiResult: state.wallet.currencies,
  total: state.wallet.total,
});

Wallet.defaultProps = {
  myEmail: '',
  apiResult: {},
  getExpenses: [{}],
  total: 0,
};

Wallet.propTypes = {
  myEmail: PropTypes.string,
  total: PropTypes.number,
  getExpenses: PropTypes.arrayOf(PropTypes.object),
  saveExpense: PropTypes.func.isRequired,
  saveTotal: PropTypes.func.isRequired,
  apiEconomia: PropTypes.func.isRequired,
  apiResult: PropTypes.objectOf(PropTypes.object),
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
