import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategorySelect from '../components/categorySelect';
import PaymentSelect from '../components/paymentSelect';
import { API_CURRENCY, actionSaveExpense, actionSaveTotal,
  actionUpdateExpenses } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.loadCurrencySelect = this.loadCurrencySelect.bind(this);
    this.change = this.change.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.loadExpenses = this.loadExpenses.bind(this);
    this.loadTH = this.loadTH.bind();
    this.deleteExpense = this.deleteExpense.bind(this);
    this.showTotalValue = this.showTotalValue.bind(this);

    this.state = {
      value: '1',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
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
      method, tag } = this.state;

    const { getExpenses, apiEconomia, saveExpense, saveTotal, total = 0 } = this.props;
    await apiEconomia();

    const { apiResult } = this.props;
    const totalValue = total + value * apiResult[currency].ask;
    saveTotal(totalValue);
    saveExpense(
      { id: getExpenses.length,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: apiResult,
      },
    );
  }

  showTotalValue() {
    let total = 0;
    const { getExpenses } = this.props;
    getExpenses.forEach((expense) => {
      const { exchangeRates, currency, value } = expense;
      total += exchangeRates[currency].ask * value;
    });
    return total.toFixed(2);
  }

  // Função comentada para passar nos testes, caso queira salvar total no state global = descomentar.
  deleteExpense(id) { // value) {
    const { getExpenses, updateExpense } = this.props; // saveTotal, total } = this.props;
    // let valueInBRL = 0;
    const newArray = [];
    getExpenses.forEach((expense) => {
      if (expense.id !== id) {
        newArray.push(expense);
      }
    });
    // saveTotal(total - value);
    updateExpense(newArray);
  }

  loadExpenses() {
    const { getExpenses } = this.props;
    if (getExpenses[0]) {
      return (
        getExpenses.map(
          (expense, index) => {
            const { description, tag, method, value, currency,
              exchangeRates, id } = expense;
            const rates = Number(exchangeRates[currency].ask);
            const valueInBRL = Number(exchangeRates[currency].ask) * value;
            const currencyName = (exchangeRates[currency].name).split('/')[0];
            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{currencyName}</td>
                <td>{rates.toFixed(2)}</td>
                <td>{valueInBRL.toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    onClick={ () => this.deleteExpense(id) } // valueInBRL) }
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          },
        )
      );
    }
  }

  loadTH() {
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
    const { myEmail } = this.props;
    return (
      <div>
        Trybe
        <header>
          <p data-testid="email-field">
            Email:
            {myEmail}
          </p>
          <p data-testid="total-field">
            Despesa total:
            {this.showTotalValue()}
          </p>
          <p data-testid="header-currency-field">BRL</p>
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
        <table>
          {this.loadTH()}
          <tbody>
            {this.loadExpenses()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  apiEconomia: () => dispatch(API_CURRENCY()),
  saveExpense: (value) => dispatch(actionSaveExpense(value)),
  saveTotal: (value) => dispatch(actionSaveTotal(value)),
  updateExpense: (value) => dispatch(actionUpdateExpenses(value)),
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
  updateExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
