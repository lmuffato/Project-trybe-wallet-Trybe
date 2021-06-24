import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, addExpenses } from '../actions';
import TableExpenses from './TableExpenses';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.savingChanges = this.savingChanges.bind(this);
    this.addNewExpenses = this.addNewExpenses.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  savingChanges(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  addNewExpenses() {
    const { currencies, dispachingExpense, getCurrency } = this.props;
    getCurrency();
    const newExpenses = {
      ...this.state,
      exchangeRates: currencies,
    };
    dispachingExpense(newExpenses);
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  render() {
    const { currencies } = this.props;
    const currenciesKey = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');

    return (
      <div>
        <form className="expense-form">
          <label htmlFor="valor">
            Valor
            <input id="valor" name="value" onChange={ this.savingChanges } />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda" name="currency" onChange={ this.savingChanges }>
              {currenciesKey.map((currencyKey) => (
                <option key={ currencyKey }>{currencyKey}</option>))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment" name="method" onChange={ this.savingChanges }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="typeOfExpense">
            Tag
            <select id="typeOfExpense" name="tag" onChange={ this.savingChanges }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" name="description" onChange={ this.savingChanges } />
          </label>
          <button type="button" name="addButton" onClick={ this.addNewExpenses }>
            Adicionar despesa
          </button>
        </form>
        <TableExpenses />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
  dispachingExpense: (expenses) => dispatch(addExpenses(expenses)),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

ExpenseForm.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  dispachingExpense: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
