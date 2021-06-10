import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { getEmail } = this.props;
    const { total } = this.state;
    return (
      <header>
        <span data-testid="email-field">{getEmail}</span>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getTotal: state.wallet.total,
  getCurrency: state.wallet.currentCurrency,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
