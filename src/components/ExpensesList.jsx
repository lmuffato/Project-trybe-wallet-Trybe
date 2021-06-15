import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseCard from './ExpenseCard';

class ExpensesList extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <main>
        { expenses
          .map((expense, index) => <ExpenseCard key={ index } expense={ expense } />) }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(ExpensesList);
