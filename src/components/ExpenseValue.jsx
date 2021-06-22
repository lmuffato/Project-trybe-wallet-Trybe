import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesValues } from '../actions/index';

class ExpenseValue extends Component {
  render() {
    const { inputExpensesValues } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            step="0.1"
            onChange={ (event) => { inputExpensesValues(event.target.value); } }
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseValue: state.wallet.value,
});

const mapDispatchToProps = (dispatch) => ({
  inputExpensesValues: (value) => dispatch(expensesValues(value)),
});

ExpenseValue.propTypes = {
  inputExpensesValues: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseValue);
