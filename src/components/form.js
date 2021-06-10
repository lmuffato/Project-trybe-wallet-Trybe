import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="describe">
          Descrição
          <input type="text" id="describe" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {currencies
              .map((currencie) => <option key={ currencie }>{currencie}</option>)}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-payment">
          Tag
          <select id="tag-payment">
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
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(String),
};

Form.defaultProps = {
  currencies: [],
};
