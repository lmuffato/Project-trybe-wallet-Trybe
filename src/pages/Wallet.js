import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoinCodes } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  render() {
    const { userEmail, coins } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ userEmail }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="input-value">
            Valor
            <input name="input-value" type="text" required />
          </label>
          <label htmlFor="input-description">
            Descrição
            <input name="input-description" type="text" required />
          </label>
          <label htmlFor="input-coin">
            Moeda
            <select name="input-coin">
              {coins.map((coin) => <option key={ coin }>{coin}</option>)}
            </select>
          </label>
          <label htmlFor="input-payment-type">
            Método de pagamento
            <select name="input-payment-type" required>
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            TAG
            <select name="input-tag" required>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.email,
  coins: state.wallet.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchCoinCodes()),
});

Wallet.propTypes = {
  userEmail: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
