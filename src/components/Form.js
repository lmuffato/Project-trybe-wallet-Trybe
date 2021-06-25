import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dispatchCurrencies, addSpends } from '../actions';

class Form extends React.Component {
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

    this.addToLocal = this.addToLocal.bind(this);
    this.addNewExpense = this.addNewExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  addToLocal(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addNewExpense() {
    const { currencies, getCurrency, expenseDispatch } = this.props;
    getCurrency();
    const addedExpense = {
      ...this.state,
      exchangeRates: currencies,
    };
    expenseDispatch(addedExpense);
    this.setState((previousState) => ({ id: previousState.id + 1 }));
    console.log('Olá');
    console.log(this.state);
  }

  render() {
    const { currencies } = this.props;
    const validCurrencies = Object.keys(currencies).filter((currency) => (
      currency !== 'USDT' && currency !== 'DOGE'));
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" name="value" onChange={ this.addToLocal } />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="description"
            onChange={ this.addToLocal }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="currency" onChange={ this.addToLocal }>
            {validCurrencies.map((currency) => (
              <option key={ currency }>{ currency }</option>))}
          </select>
        </label>
        <label htmlFor="payment" onChange={ this.addToLocal }>
          Método de pagamento
          <select id="payment" name="method" onChange={ this.addToLocal }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ this.addToLocal }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.addNewExpense }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(dispatchCurrencies()),
  expenseDispatch: (expenses) => dispatch(addSpends(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Form.propTypes = {
  getCurrency: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
