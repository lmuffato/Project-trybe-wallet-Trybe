import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailGotten } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            { emailGotten }
          </p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>

        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descriçao">
            Descrição
            <input id="descriçao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select> </select>
          </label>
          <label htmlFor="mtdPagamanto">
            Método de Pagamento
            <select id="mtdPagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="mtdPagamento">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
            <input id="tag" />
          </label>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGotten: state.user.email,
});

Wallet.propTypes = {
  emailGotten: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
