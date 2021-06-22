import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SumExpenses extends Component {
  render() {
    const { wallet2 } = this.props;
    return (
      <div>
        <h2 data-testid="total-field">{wallet2.totalExpenses}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet2: state.wallet2,
});

SumExpenses.propTypes = {
  wallet2: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(SumExpenses);
