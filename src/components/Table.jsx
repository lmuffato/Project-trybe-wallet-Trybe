import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TotalExpense from './TotalExpense';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses.length);
    return (
      <table>
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
        {expenses.length > 0 ? <TotalExpense /> : <div />}
      </table>
    );
  }
}

const secondMapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf([{}]).isRequired,
};

export default connect(secondMapStateToProps)(Table);
