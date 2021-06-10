import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpense } from '../../../actions';

class DeleteExpense extends Component {
  render() {
    const { expense, delExpenseAction } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ (e) => {
          e.preventDefault();
          delExpenseAction(expense);
        } }
      >
        x
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  delExpenseAction: (expense) => dispatch(delExpense(expense)),
});

DeleteExpense.propTypes = {
  expense: PropTypes.oneOfType([PropTypes.object]).isRequired,
  delExpenseAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DeleteExpense);
