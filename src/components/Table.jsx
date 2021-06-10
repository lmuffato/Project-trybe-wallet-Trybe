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
          <td>Descrição</td>
          <td>Tag</td>
          <td>Método de pagamento</td>
          <td>Valor</td>
          <td>Moeda</td>
          <td>Câmbio utilizado</td>
          <td>Valor convertido</td>
          <td>Moeda de conversão</td>
          <td>Editar/Excluir</td>
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
