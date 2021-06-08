import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk } from '../actions';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            {currencies.map((currency) => <option key={ currency }>{ currency }</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de débito</option>
            <option>Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="type">
          Tag
          <select name="type" id="type">
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

const mapStateToProps = ({ user: { email }, wallet: { currencies } }) => ({
  email,
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  email: PropTypes.string,
}.isRequired;
