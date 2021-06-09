import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      initialValue: 0,
    };
  }

  render() {
    const { initialValue } = this.state;
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ initialValue }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.defaultProps = {
  email: '',
};

Header.propTypes = {
  email: PropTypes.string,
};

export default connect(mapStateToProps)(Header);
