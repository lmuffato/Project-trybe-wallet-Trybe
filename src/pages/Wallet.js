import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  render() {
    const { user: { email }, wallet: { currencies } } = this.props;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{email}</h1>
          <h1 data-testid="total-field">0</h1>
          <h1 data-testid="header-currency-field">BRL</h1>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="number" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input id="descrição" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {currencies.map((element) => <option key={ element }>{element}</option>)}
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="metodo">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(getCurrencies()),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  getApi: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
