import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCURRENCIESApiThunk } from '../actions/index';

class Expenses extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <>
        <h1>Despesa</h1>
        <form>
          <label htmlFor="id-valor">
            Valor
            <input id="id-valor" type="text" />
          </label>
          <label htmlFor="id-descricao">
            Descrição
            <textarea id="id-descricao" />
          </label>
          <label htmlFor="id-moeda">
            Moeda
            <select id="id-moeda">
              {
                currencies.map((currency) => (
                  <option key={ currency } value={ currency }>{currency}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="id-metodoDePagamento">
            Método de pagamento
            <select id="id-metodoDePagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartaoDecredito">Cartão de crédito</option>
              <option value="cartaoDeDebito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="id-tag">
            Tag
            <select id="id-tag">
              <option value="tag">Alimentação</option>
              <option value="tag">Lazer</option>
              <option value="tag">Trabalho</option>
              <option value="tag">Transporte</option>
              <option value="tag">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
  // currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCURRENCIESApiThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

Expenses.propTypes = {
  currencies: PropTypes.string,
}.isRequired;
