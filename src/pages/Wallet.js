import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Header from '../components/Header';
/* <form>
  <label>
    Nome:
    <input type="text" name="name" />
  </label>
</form> */

class Wallet extends React.Component {
  constructor() {
    super();
    this.returnForm = this.returnForm.bind(this);
  }

  returnForm() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="valor" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="descricao" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select type="select" name="moeda" id="currency">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select type="select" name="metodo-pagamento" id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select type="select" name="categoria" id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        { this.returnForm()}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
