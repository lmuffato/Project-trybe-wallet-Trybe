import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <div>
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <span data-testid="total-field">Despesa Total: R$ 0.00</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" />
          </label>

          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>

          <label htmlFor="currencies">
            Moeda:
            <select id="currencies">
              <option value="0">0</option>
            </select>
          </label>

          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
