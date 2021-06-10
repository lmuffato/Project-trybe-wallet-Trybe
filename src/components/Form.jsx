import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value_input">
          Valor:
          <input id="value_input" type="text" name="value" />
        </label>

        <label htmlFor="value_description">
          Descrição:
          <input id="value_description" type="text" name="value" />
        </label>

        <label htmlFor="moedaSelected">
          Moeda:
          <select id="moedaSelected">
            <option value="BRL">BRL</option>
          </select>
        </label>

        <label htmlFor="pagamentoSelected">
          Método de pagamento
          <select id="pagamentoSelected">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoCredito">Cartão de Crédito</option>
            <option value="CartaoDebito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  // totalValue: state.user.user.totalValue,
});

export default connect(mapStateToProps, null)(Form);

/* Form.propTypes = {
  // email: PropTypes.string,
  // totalValue: PropTypes.number,
}.isRequired; */
