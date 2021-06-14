import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Valor from './Form/Valor';
import Moeda from './Form/Moeda';
import MetodoPagamento from './Form/MetodoPagamento';
import Tag from './Form/Tag';
import Descricao from './Form/Descricao';
import Expenses from './Expenses';
import {
  addExpenseAction,
  fetchApiExchangeThunk,
  increaseCounterAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.generateExpense = this.generateExpense.bind(this);
  }

  generateExpense() {
    const {
      addExpense,
      getMetodoPagamento,
      getMoeda,
      getTag,
      getValor,
      getDescricao,
      getExpensesRate,
      getCounter,
      increaseCounter } = this.props;

    const typedExpense = {
      id: getCounter,
      value: getValor,
      description: getDescricao,
      currency: getMoeda,
      method: getMetodoPagamento,
      tag: getTag,
      expenseRate: getExpensesRate,
    };

    increaseCounter();
    addExpense(typedExpense);
  }

  async handleClick(e) {
    e.preventDefault();

    const { fetchExpense } = this.props;
    await fetchExpense();

    this.generateExpense();
  }

  render() {
    return (
      <>
        <Header />
        <hr />
        <form>
          <Valor />
          <Moeda />
          <MetodoPagamento />
          <Tag />
          <Descricao />
          <button type="submit" onClick={ this.handleClick }>Adicionar Despesa</button>
        </form>
        <Expenses />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getValor: state.form.valor,
  getMoeda: state.form.moeda,
  getMetodoPagamento: state.form.metodoPagamento,
  getTag: state.form.tag,
  getDescricao: state.form.descricao,
  getExpensesRate: state.wallet.expenseRate,
  getCounter: state.wallet.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(addExpenseAction(state)),
  fetchExpense: (state) => dispatch(fetchApiExchangeThunk(state)),
  increaseCounter: (state) => dispatch(increaseCounterAction(state)),
});

Wallet.propTypes = {
  fetchExpense: PropTypes.func.isRequired,
  getValor: PropTypes.string.isRequired,
  getMoeda: PropTypes.string.isRequired,
  getMetodoPagamento: PropTypes.string.isRequired,
  getTag: PropTypes.string.isRequired,
  getDescricao: PropTypes.string.isRequired,
  // getExpensesRate: PropTypes.shape({
  //   code: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   ask: PropTypes.string.isRequired,
  // })
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
