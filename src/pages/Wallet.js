import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <span data-testid="total-field">{`Despesa Total: ${0}`}</span>
          <span data-testid="header-currency-field">{`Moeda: ${'BRL'}`}</span>
        </header>
        <form data-testid="wallet-form">
          <label htmlFor="number-in" data-testid="number-input-label">
            Valor
            <input type="number" id="number-in" />
          </label>
          <label htmlFor="text-in" data-testid="text-input-label">
            Descrição
            <input type="text" id="text-in" />
          </label>
          <label htmlFor="selected-in" data-testid="select-input-label">
            Moeda
            <select id="selected-in">
              <option> </option>
            </select>
          </label>
          <label htmlFor="selected-in-payment" data-testid="select-label-payment">
            Método de pagamento
            <select id="selected-in-payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="selected-in-tag" data-testid="select-label-tag">
            Tag
            <select id="selected-in-tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
