import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesThunk, getExchangeThunk } from '../actions';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descrição: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.returnInfo = this.returnInfo.bind(this);
    this.pay = this.pay.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  returnInfo() {
    const { getExpenses } = this.props;
    const { valor, descrição, moeda, pagamento, tag } = this.state;
    const obj = {
      id: getExpenses.length,
      value: valor,
      description: descrição,
      currency: moeda,
      method: pagamento,
      tag,
    };
    getExchangeThunk(obj);
    return obj;
  }

  pay() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return payments;
  }

  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies, saveInfos } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            name="valor"
            id="valor"
            type="number"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            name="descrição"
            id="descrição"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda" onChange={ this.handleChange }>
            {currencies.map((curr, index) => <option key={ index }>{curr}</option>)}
          </select>
        </label>
        <label htmlFor="método">
          Método de pagamento
          <select name="pagamento" id="método" onChange={ this.handleChange }>
            {this.pay().map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            {tags.map((payment, index) => <option key={ index }>{payment}</option>)}
          </select>
        </label>
        <button
          onClick={ () => saveInfos(this.returnInfo()) }
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  getExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  saveInfos: (obj) => dispatch(getExchangeThunk(obj)),
});

Forms.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveInfos: PropTypes.func.isRequired,
  getExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
