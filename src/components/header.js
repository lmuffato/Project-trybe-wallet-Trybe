import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    // const {  } = this.state;
    const { theEmail, totalExpended } = this.props;
    return (
      <>
        <h5 data-testid="email-field">
          { theEmail }
        </h5>
        <h5 data-testid="total-field">
          { totalExpended }
        </h5>
        <h5 data-testid="header-currency-field"> BRL </h5>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theEmail: state.user.email,
  totalExpended: state.wallet.totalExpended,
});

Header.propTypes = {
  theEmail: PropTypes.string.isRequired,
  totalExpended: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
