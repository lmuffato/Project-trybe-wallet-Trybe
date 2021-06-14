import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  constructor() {
    super();
    this.state = {
      tableHeading: ['Descrição', 'Tag',
        'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
        'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'],
    };
  }

  render() {
    const { tableHeading } = this.state;
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeading.map((headingText, key) => <th key={ key }>{headingText}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, key) => {
            const currName = expense.currency;
            return (
              <tr key={ key }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[currName].name.split('/')[0]}</td>
                <td>{parseFloat(expense.exchangeRates[currName].ask).toFixed(2)}</td>
                <td>
                  {parseFloat(expense.value
                    * expense.exchangeRates[currName].ask).toFixed(2)}
                </td>
                <td>Real</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
