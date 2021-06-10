import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';

class ExpenseForm extends Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="number" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" type="text" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {currencies.map((currency) => (
              <option key={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-methods">
          Método de pagamento:
          <select id="payment-methods">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense">
          Tag:
          <select id="expense">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  getCurrency: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(
    fetchCurrency(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
