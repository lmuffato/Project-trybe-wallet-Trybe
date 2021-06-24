import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {

  render() {
    const { userEmail } = this.props;
    return (
      <>
        <p data-testid="email-field">
          { userEmail }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Header);
