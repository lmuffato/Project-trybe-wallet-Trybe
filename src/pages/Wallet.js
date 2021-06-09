import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { getEmail, getCurrency } = this.props;
    const { total } = this.state;
    return (
      <header>
        <span data-testid="email-field">{getEmail}</span>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">{getCurrency}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getCurrency: state.wallet.currentCurrency,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
