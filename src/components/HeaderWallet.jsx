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
          <span>
            <h1 data-testid="total-field">
              { actualTotalExpenses === 0 ? parseFloat(actualTotalExpenses).toFixed(0)
                : parseFloat(actualTotalExpenses).toFixed(2)}
            </h1>
          </span>
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
  actualTotalExpenses: PropTypes.number.isRequired,
  actualEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(HeaderWallet); //