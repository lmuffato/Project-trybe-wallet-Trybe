import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeOutlay } from '../actions';
import TableHead from './tableHead';
import Button from './button';

// resolução para o problema do map dos dados vista no repositório de Wanderson
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/20
class Table extends Component {
constructor(props) {
  super(props);
  this.state = {
    count: 0,
  }
  this.deletingRow = this.deletingRow.bind(this);
}

  deletingRow(id) {
    const { count } = this.state;
    this.setState({ count: count - 1 });
    console.log(id);
    const { wallet } = this.props;
    const rows = document.querySelectorAll('tr');
    wallet(id);
  }
  render() {
    const { database, wallet, giveValue } = this.props;
    const { count } = this.state;
    return (
      <table>
        <TableHead />
        <tbody>
          { database.map((expense, i) => (
            <tr key={ i }>
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
                <Button />
                {/* <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ (event) => {
                    event.preventDefault();
                    this.deletingRow(event.target, giveValue);
                  } }
                >
                  Excluir
                </button> */}
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
  wallet: (id) => dispatch(removeOutlay(id)),
});

Table.propTypes = {
  database: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
