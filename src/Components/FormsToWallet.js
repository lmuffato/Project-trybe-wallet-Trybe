import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsThunk } from '../actions/index';

class FormsToWallet extends Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { currencies } = this.props;
    return (

      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            {!currencies
              ? <option value="BRL">BRL</option>
              : currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
          </select>
        </label>
        <label htmlFor="metpagamento">
          Método de pagamento
          <select id="metpagamento">
            <option value="money">Dinheiro</option>
            <option value="credCard">Cartão de crédito</option>
            <option value="debCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag">
            <option value="food">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="Transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormsToWallet.propTypes = {
  getCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(FormsToWallet);
