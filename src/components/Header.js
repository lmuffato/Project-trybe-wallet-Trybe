import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userMail } = this.props;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">
            { userMail }
          </h1>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userMail: state.user.email,
});

Header.propTypes = {
  userMail: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
