import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  render() {
    const { userEmail } = this.props;
    const { total } = this.state;
    return (
      <>
        <header className="wallet-header">
          <h1>My Wallet</h1>
          <p>
            Email:
            <span data-testid="email-field">
              {userEmail}
            </span>
          </p>
          <p>
            Total:
            <span data-testid="total-field">
              {total}
            </span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        <div>Wallet</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email });

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
