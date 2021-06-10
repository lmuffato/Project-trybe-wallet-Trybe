import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency">
            { }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" name="method">
            <option value=""> </option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Pix">Pix</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer" selected>Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Expenses;
// connect(mapStateToProps, null)(Expenses);
// const mapStateToProps = (state) => ({});
// Header.propTypes = { user: PropTypes.string.isRequired };
