import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SumExpenses extends Component {
  render() {
    const { wallet2 } = this.props;
    return (
      <div>
        <header data-testid="total-field">
          <h2>
            Valor total:
            {wallet2.totalExpenses}
          </h2>
        </header>
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
