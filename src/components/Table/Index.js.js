import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from './data';

class Table extends React.Component {
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

          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.currency}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {(expense.value
                * expense.exchangeRates[expense.currency].ask)}
              </td>
              <td>Real</td>
              <td>Editar/Excluir</td>
            </tr>
          ))}

        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default connect(mapStateToProps, null)(Table);
