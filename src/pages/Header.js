import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    const totalField = 0;
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
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
