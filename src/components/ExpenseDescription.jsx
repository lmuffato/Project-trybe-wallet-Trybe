import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesDescription } from '../actions/index';

class ExpenseDescription extends Component {
  render() {
    const { inputDescription } = this.props;
    return (
      <div>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            onChange={ (event) => { inputDescription(event.target.value); } }
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
  inputDescription: (description) => dispatch(expensesDescription(description)),
});

ExpenseDescription.propTypes = {
  inputDescription: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDescription);
