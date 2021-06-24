import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeOutlay } from '../actions';
import TableHead from './tableHead';

class Table extends Component {
  constructor(props) {
    super(props);

    this.expenseData = this.expenseData.bind(this);
  }

  expenseData({ id, value, description, currency, method, tag, exchangeRates }) {
    const { deleteOutlay } = this.props;
    console.log(exchangeRates[currency].name);
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{(exchangeRates[currency].name).split('/')[0]}</td>
        <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleteOutlay(id) }
          >
            Excluir
          </button>
          <button
            type="button"
            data-testid="edit-btn"
            // onClick={ () => edit(id) }
          >
            Editar despesa
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { database } = this.props;
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
                <button type="button" data-testid="delete-btn">Excluir</button>
              </td>
              <td>
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
  deleteOutlay: (id) => dispatch(removeOutlay(id)),
});

Table.propTypes = {
  deleteOutlay: PropTypes.func.isRequired,
  database: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
