import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Crie uma página para sua carteira com as seguintes características:
Crie um header para a página de carteira contendo as seguintes características:
Um elemento que exiba o email da pessoa usuária que fez login. /Linha 17/
Um campo com a despesa total gerada pela lista de gastos. /Linha 19/
Um campo que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'. /Linha 21/
Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:
Um campo para adicionar valor da despesa. /Linha 30/
Um campo de texto para adicionar a descrição da despesa. /Linha 34/
Um campo de select para adicionar em qual moeda será registrada a despesa. /Linha 38/
Um campo para adicionar qual método de pagamento será utilizado. /Linha 45/
Um campo para selecionar uma categoria (tag) para a despesa. /Linha 54/ */

class Header extends React.Component {
  render() {
    const { userData } = this.props;
    return (
      <div>
        <header>
          <h3>Email: </h3>
          <p data-testid="email-field">{userData}</p>
          <h3>Total de despesas: R$</h3>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.email,
});

Header.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
