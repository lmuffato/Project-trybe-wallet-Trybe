import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user: { email } } = this.props;
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
            <input type="number" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select>
              vazio
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select>
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
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
