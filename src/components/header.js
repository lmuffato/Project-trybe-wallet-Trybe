import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { saveEmail } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">
            { saveEmail }
          </h3>
        </header>

        <spam data-testid="total-field">
          Total = 0
        </spam>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  saveEmail: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
