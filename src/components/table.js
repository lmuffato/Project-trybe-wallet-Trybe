import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeOutlay } from '../actions';
import TableHead from './tableHead';

// resolução para o problema do map dos dados vista no repositório de Wanderson
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/20
class Table extends Component {
  constructor(props) {
    super(props);
    this.deletingRow = this.deletingRow.bind(this);
  }

  deletingRow(id) {
    const value = parseFloat(id.children[6].innerText);
    const { wallet } = this.props;
    wallet(value);
    id.parentNode.removeChild(id);
  }

  render() {
    const { database, wallet } = this.props;
    return (
      <table>
        <TableHead />
        <tbody>
          { database.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>
                { expense.exchangeRates[
                  Object.keys(expense.exchangeRates)
                    .filter((key) => key === expense.currency)
                ].name.split('/')[0] }
              </td>
              <td>
                { parseFloat(expense.exchangeRates[
                  Object.keys(expense.exchangeRates)
                    .find((key) => key === expense.currency)
                ].ask).toFixed(2) }
              </td>
              <td>
                { (expense.value * expense.exchangeRates[
                  Object.keys(expense.exchangeRates)
                    .filter((key) => key === expense.currency)
                ].ask).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ (e) => {
                    e.preventDefault();
                    wallet(expense);
                  } }
                >
                  Excluir
                </button>
                <button type="button" data-testid="edit-btn">Editar despesa</button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>);
  }
}

const mapStateToProps = (state) => ({
  database: state.wallet.expenses,
  addTable: state.table.showTable,
});

const mapDispatchToProps = (dispatch) => ({
  wallet: (expense) => dispatch(removeOutlay(expense)),
});

Table.propTypes = {
  database: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
