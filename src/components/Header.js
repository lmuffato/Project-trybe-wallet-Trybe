import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <div>
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <span data-testid="total-field">Despesa total: R$ 0</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" />
          </label>

          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" />
          </label>

          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              <option value="0">0</option>
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
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
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
