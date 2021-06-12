import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoins } from '../actions/walletAction';

class ExpenseInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.expenseValue = this.expenseValue.bind(this);
    this.descriptionValue = this.descriptionValue.bind(this);
    this.coinValue = this.coinValue.bind(this);
    this.payMethod = this.payMethod.bind(this);
    this.tagExpense = this.tagExpense.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  expenseValue() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="expense-value">
          Valor:
          <input
            type="number"
            id="expense-value"
            name="value"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }

  descriptionValue() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="description-value">
          Descrição:
          <input
            type="text"
            id="description-value"
            name="description"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }

  coinValue() {
    const { currencies, handleChange } = this.props;
    const getCurrencies = Object.keys(currencies);
    const getCoin = getCurrencies.filter((coin) => coin !== 'USDT');
    return (
      <div>
        <label htmlFor="coin-input">
          Moeda:
          <select
            id="coin-input"
            name="coin"
            onChange={ handleChange }
          >
            { getCoin.map((currency) => (
              <option key={ currency }>{ currency }</option>)) }
          </select>
        </label>
      </div>
    );
  }

  payMethod() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pay-method">
          Método de pagamento:
          <select
            id="pay-method"
            name="payment"
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }

  tagExpense() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="tag-expense">
          Tag:
          <select
            id="tag-expense"
            name="tag"
            onChange={ handleChange }
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.expenseValue()}
        {this.descriptionValue()}
        {this.coinValue()}
        {this.payMethod()}
        {this.tagExpense()}
      </div>
    );
  }
}

ExpenseInputs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  getApi: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(Object).isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(getCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseInputs);

// Referências:
// Object.keys: https://qastack.com.br/programming/5072136/javascript-filter-for-objects
// Filter: https://pt.stackoverflow.com/questions/241823/como-remover-um-item-de-um-array-sem-conhecer-o-%C3%ADndice-apenas-o-valor
