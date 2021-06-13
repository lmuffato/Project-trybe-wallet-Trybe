import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from './data';
import { deleteExpense } from '../../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }

  handleDeleteBtn(id) {
    const { btnDeleteExpense } = this.props;
    btnDeleteExpense(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table style={ { width: '100%' } }>
        <thead>
          <tr>
            {data.map((key) => <th key={ key }>{key}</th>)}
          </tr>
        </thead>
        <tbody>

          {expenses.map((expense) => {
            const valueSelected = Number(expense.exchangeRates[expense.currency].ask);
            const finalValue = expense.value * Number(valueSelected);
            const expenseName = expense.exchangeRates[expense.currency].name
              .split('/')[0];
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expenseName}</td>
                <td>{valueSelected.toFixed(2)}</td>
                <td>
                  {finalValue.toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={
                      () => this.handleDeleteBtn(expense.id)
                    }
                  >
                    Excluir

                  </button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  btnDeleteExpense: (state) => dispatch(deleteExpense(state)),
});

Table.propTypes = {
  btnDeleteExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
