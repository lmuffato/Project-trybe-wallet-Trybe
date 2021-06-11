import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailGot } = this.props;
    console.log(emailGot);
    return (
      <>
        <header>
          <span data-testid="email-field">
            Olá,
            { emailGot }
          </span>
          <span data-testid="total-field">Despesa Total: R$ 0 </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <main>
          <label htmlFor="input-valor">
            Valor
            <input type="number" id="input-valor" />
          </label>
          <label htmlFor="input-descrição">
            Descrição
            <input type="text" id="input-descrição" />
          </label>
          <label htmlFor="input-moeda">
            Moeda
            <select id="input-moeda">
              <option>1</option>
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de pagamento
            <select id="input-pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-categoria">
            Tag
            <select id="input-categoria">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGot: state.user.email,
});

Wallet.propTypes = {
  emailGot: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
