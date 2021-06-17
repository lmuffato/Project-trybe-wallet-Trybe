import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsThunk, addExpense } from '../actions/index';

class FormsToWallet extends Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descrição: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies, addExpenses } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" onChange={ this.handleChange } />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin" onChange={ this.handleChange }>
            {!currencies
              ? <option value="BRL">BRL</option>
              : currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
          </select>
        </label>
        <label htmlFor="metpagamento">
          Método de pagamento
          <select id="metpagamento" onChange={ this.handleChange }>
            <option value="money">Dinheiro</option>
            <option value="credCard">Cartão de crédito</option>
            <option value="debCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag" onChange={ this.handleChange }>
            <option value="food">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="Transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => { addExpenses(this.state); } }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsThunk()),
  addExpenses: (state) => dispatch(addExpense(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormsToWallet.propTypes = {
  getCoins: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormsToWallet);
