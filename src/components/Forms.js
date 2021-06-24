/* eslint-disable max-lines-per-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIThunk } from '../actions/wallet';

class Forms extends Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  qualquer() {
    return (
      <label htmlFor="input-value">
        Valor
        <input
          type="text"
          name="name"
          id="input-value"
        />
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        { this.qualquer() }
        <label htmlFor="input-description">
          Descrição
          <input
            type="text"
            name="name"
            id="input-description"
          />
        </label>
        <label htmlFor="input-currency">
          Moeda
          <select
            name="name"
            id="input-currency"
          >
            {currencies.filter((curr) => curr !== 'USDT').map((currency) => (
              <option key={ currency } value={ currency }>
                { currency }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="input-payment">
          Método de pagamento
          <select
            name="name"
            id="input-payment"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select
            name="name"
            id="input-tag"
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getAPIThunk()),
});

Forms.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
