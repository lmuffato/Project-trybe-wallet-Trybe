import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../Wallet.css';

class Wallet extends Component {
  render() {
    const { props: { emailDaPessoa } } = this;
    return (
      <>
        <div className="flex-container">
          <header data-testid="email-field">
            {emailDaPessoa}
          </header>
          <span data-testid="header-currency-field">BRL</span>
          <span data-testid="total-field">{0}</span>
        </div>
        <form className="fieldset">
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" name="Valor" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input id="descrição" type="text" name="Descrição" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda" name="Moeda">
              <option value="valor1">Valor 1</option>
              <option value="valor2" selected>Valor 2</option>
              <option value="valor3">Valor 3</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="Tag">
              <option value="alimentação" selected>Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento:
            <select id="metodoDePagamento" name="Método de pagamento">
              <option value="dinheiro" selected>Dinheiro</option>
              <option value="cartão-de-crédito">Cartão de crédito</option>
              <option value="Cartão-de-débito">Cartão de débito</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  emailDaPessoa: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailDaPessoa: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
