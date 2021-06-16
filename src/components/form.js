import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApiPriceThunk } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.handleInputs = this.handleInputs.bind(this);
    this.state = {
      value: '',
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Alimentação',
      qtd: 0,
    };
  }

  handleInputs({ target }) {
    const { expenses } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value });
    this.setState({ qtd: expenses.length });
  }

  render() {
    const { currencies, priceRequest } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" name="value" onChange={ this.handleInputs } />
        </label>
        <label htmlFor="desc">
          Descrição
          <input
            type="text"
            id="desc"
            name="description"
            onChange={ this.handleInputs }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" onChange={ this.handleInputs }>
            {currencies
              .map((currencie) => <option key={ currencie }>{currencie}</option>)}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method" name="method" onChange={ this.handleInputs }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-payment">
          Tag
          <select id="tag-payment" name="tag" onChange={ this.handleInputs }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ () => priceRequest(this.state) }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  priceRequest: (state) => dispatch(requestApiPriceThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(String),
};

Form.defaultProps = {
  currencies: [],
};
