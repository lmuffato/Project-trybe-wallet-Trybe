import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { displayEmail } = this.props;
    console.log(displayEmail);
    return (
      <div>
        <header data-testid="email-field">{ displayEmail }</header>
        <h5 data-testid="total-field">0</h5>
        <h5 data-testid="header-currency-field">BRL</h5>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  displayEmail: state.user.email,
});

Header.propTypes = {
  displayEmail: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
