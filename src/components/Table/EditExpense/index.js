import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpenseToForm } from '../../../actions';

class EditExpense extends Component {
  render() {
    const { expense, getExpenseToFormAction } = this.props;
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => {
          getExpenseToFormAction(expense);
        } }
      >
        Edit
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getExpenseToFormAction: (expense) => dispatch(getExpenseToForm(expense)),
});

EditExpense.propTypes = {
  expense: PropTypes.oneOfType([PropTypes.object]).isRequired,
  getExpenseToFormAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(EditExpense);
