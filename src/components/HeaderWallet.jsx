import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { actualTotalExpenses, actualEmail } = this.props;
    return (
      <div>
        <header>
          <span>Email: </span>
          <span data-testid="email-field">{actualEmail}</span>
          <span>Total: </span>
          <span data-testid="total-field">{actualTotalExpenses}</span>
          <span>Câmbio: </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  actualTotalExpenses: state.wallet2.totalExpenses,
  actualEmail: state.user.email,
});

HeaderWallet.propTypes = {
  actualTotalExpenses: PropTypes.string.isRequired,
  actualEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(HeaderWallet);
