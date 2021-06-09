import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Expense from './Expense';

class ExpensesList extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <>
        {expenses.map((expense) => <Expense key={ expense.id } { ...expense } />)}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesList);

ExpensesList.propTypes = {
  expenses: PropTypes.array,
}.isRequired;
