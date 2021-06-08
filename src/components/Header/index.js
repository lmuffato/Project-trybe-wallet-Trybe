import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  render() {
    const { email, selectedExchange } = this.props;
    const { total } = this.state;
    return (
      <div>
        <span data-testid="email-field">
          { email }
        </span>
        <span data-testid="total-field">
          { total }
        </span>
        <span data-testid="header-currency-field">
          { selectedExchange }
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  selectedExchange: state.wallet.selectedExchange,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  selectedExchange: PropTypes.string,
};

Header.defaultProps = {
  selectedExchange: 'BRL',
};

export default connect(mapStateToProps)(Header);
