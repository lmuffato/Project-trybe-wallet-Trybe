import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expenses from './Expenses';

export default class WalletTable extends Component {
  render() {
    const { expenses, reduceTotal } = this.props;
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <Expenses expenses={ expenses } reduceTotal={ reduceTotal } />
      </table>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
