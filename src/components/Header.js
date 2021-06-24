import React, { Component } from 'react';
// import store from '../store/index';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    // const { user: { email } } = store.getState();
    // console.log(email);
    const { email } = this.props;

    return (
      <div>
        <header data-testid="email-field">{ email }</header>

        <p data-testid="total-field">0</p>

        <p data-testid="header-currency-field">BRL</p>

      </div>);
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

Header.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
