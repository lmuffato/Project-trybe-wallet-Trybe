import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, showHideEdit } from '../actions/index';
import './table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  trBody() {
    return (
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
    );
  }

  handleClick(id) {
    const { editFormDispatch } = this.props;
    editFormDispatch(true, id);
  }

  render() {
    const { expenses, removeDispatch } = this.props;
    return (
      <table>
        <tbody>
          {this.trBody()}
          {expenses.map((expense) => {
            const { currency } = expense;
            const cur = expense.exchangeRates[currency].name;
            const rate = expense.exchangeRates[currency].ask;
            return (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ expense.value }</td>
                <td>{ cur }</td>
                <td>{ parseFloat(rate).toFixed(2) }</td>
                <td>{ (expense.value * rate).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    onClick={ () => removeDispatch(expense.id) }
                    data-testid="delete-btn"
                    type="button"
                  >
                    Excluir
                  </button>
                  <button
                    onClick={ () => this.handleClick(expense.id) }
                    type="button"
                    data-testid="edit-btn"
                  >
                    Editar
                  </button>
                </td>
              </tr>);
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeDispatch: (id) => dispatch(removeExpense(id)),
  editFormDispatch: (bool, id) => dispatch(showHideEdit(bool, id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeDispatch: PropTypes.func.isRequired,
  editFormDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
