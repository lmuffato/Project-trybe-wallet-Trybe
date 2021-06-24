import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { arrayOf, object, func } from 'prop-types';
import { connect } from 'react-redux';

import styles from './table.module.css';

import Button from '../../../../components/Button';

class Table extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className={ styles.table }>
        <tr>
          <th>Valor</th>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {
          expenses.map((expense, index) => {
            const { value, currency } = expense;
            const exchangeRate = expense.exchangeRates[currency];
            const currencyName = exchangeRate.name.split('/')[0];
            const cambio = parseFloat(exchangeRate.ask);
            const convertedValue = value * cambio;

            return (
              <tr key={ index }>
                <td>{expense.value}</td>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{currencyName}</td>
                <td>{cambio.toFixed(2)}</td>
                <td>{convertedValue.toFixed(2)}</td>
                <td>Real</td>
                <td className={ styles.buttons }>
                  {/* <Button><RiEdit2Line /></Button> */}
                  <Button
                    id={ expense.id }
                    onClick={ this.handleDelete }
                    dataTestId="delete-btn"
                  >
                    <RiDeleteBin5Line />
                  </Button>
                </td>
              </tr>
            );
          })
        }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: arrayOf(object.isRequired).isRequired,
  deleteExpense: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (payload) => dispatch({ type: 'DELETE_EXPENSES', payload }),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
