import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="input-value">
            Valor
            <input type="text" name="input-value" size="4" />
          </label>
          <label htmlFor="input-currency">
            Moeda
            <input type="text" name="input-currency" size="4" />
          </label>
          <label htmlFor="select-payMethod">
            Método
            <select name="select-payMethod">
              <option>Dinheiro</option>
              <option>Crédito</option>
              <option>Débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag:
            <select name="select-tag">
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Alimentação</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label htmlFor="input-desc">
            Descrição
            <input type="text" name="input-currency" />
          </label>
          <button type="submit">Adicionar Despesa</button>
        </form>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   userEmail: state.user.email,
// });

// Wallet.propTypes = {
//   userEmail: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps, null)(Wallet);
