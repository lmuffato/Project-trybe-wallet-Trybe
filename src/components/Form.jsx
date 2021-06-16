import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { saveExpense, editExpense } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currencies: [
        'USD',
        'CAD',
        'EUR',
        'GBP',
        'ARS',
        'BTC',
        'LTC',
        'JPY',
        'CHF',
        'AUD',
        'CNY',
        'ILS',
        'ETH',
        'XRP',
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getExpenseDetailsToEdit = this.getExpenseDetailsToEdit.bind(this);
  }

  componentDidMount() {
    this.convertCurrencyDataToInitials();
  }

  componentDidUpdate(prevProps) {
    const { expenseToEdit } = this.props;
    if (expenseToEdit !== prevProps.expenseToEdit) {
      this.getExpenseDetailsToEdit();
    }
  }

  getExpenseDetailsToEdit() {
    const { expenseToEdit } = this.props;
    const { value, description, currency, method, tag } = expenseToEdit;
    this.setState({
      value,
      description,
      currency,
      method,
      tag,
    });
  }

  changeButtonName() {
    const { expenseToEdit = {} } = this.props;
    let btnName = 'Adicionar despesa';
    if (Object.keys(expenseToEdit).length) {
      btnName = 'Editar despesa';
    }
    return btnName;
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  async handleClick(event) {
    const { id, value, description, currency, method, tag } = this.state;
    console.log(currency, value, description, method, tag);
    const {
      expenses,
      expenseToEdit,
      dispatchSaveExpense,
      dispatchEditExpense,
    } = this.props;
    const { name } = event.target;
    if (name === 'Adicionar despesa') {
      const fetchFunc = await this.fetchCurrenciesAPI();
      const expenseDetailed = {
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: fetchFunc,
      };
      dispatchSaveExpense(expenseDetailed);
      this.setState({
        id: id + 1,
        value: '',
        description: '',
      });
    } else {
      const expenseDetailed = {
        id: expenseToEdit.id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates: expenseToEdit.exchangeRates,
      };
      const editedExpenses = expenses.map((expense) => {
        if (expense.id === expenseToEdit.id) {
          return expenseDetailed;
        }
        return expense;
      });
      console.log('edit button');
      dispatchEditExpense(editedExpenses);
    }
  }

  async fetchCurrenciesAPI() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    delete response.USDT;
    return response;
  }

  async convertCurrencyDataToInitials() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    delete response.USDT;
    const currenciesNames = Object.keys(response);
    this.setState({ currencies: currenciesNames });
  }

  // Com orientação de Matheus Alencar https://github.com/tryber/sd-010-a-project-trybewallet/pull/106
  render() {
    const { currencies } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">Valor
           <input id="value" type="text" />
          </label>
          <label htmlFor="description">Descrição
            <textarea id="description" />
          </label>
          <label htmlFor="currency">Moeda
            <select id="currency">
              {
                Object.keys(currencies).map((currency) => (
                  <option key={ currency } value={ currency }>{currency}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="payment-option">Método de pagamento
            <select id="payment-option">
              <option value="cash">Dinheiro</option>
              <option value="c_credit">Cartão de crédito</option>
              <option value="c_debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">Tag:
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="healthy">Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.handleClick }>
          { this.changeButtonName() }
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseToEdit: state.wallet.setExpenses,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveExpense: (expenseDetails) => dispatch(saveExpense(expenseDetails)),
  dispatchEditExpense: (editedExpenses) => dispatch(editExpense(editedExpenses)),
});

Form.propTypes = {
  addExpense: func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
