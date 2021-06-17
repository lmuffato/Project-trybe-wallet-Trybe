import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, totalValue: totalField = 0 } = this.props;
    const currency = 'BRL';
    return (
      <header>
        <div data-testid="email-field">
          {`Email: ${userEmail}   `}
        </div>
        <div data-testid="total-field">
          {`Despesa Total:  ${totalField}`}
        </div>
        <div data-testid="header-currency-field">
          {currency}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalValue: state.wallet.totalValue,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
