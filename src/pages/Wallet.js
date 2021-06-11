import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        {/* <Header/> */}
        <header>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
