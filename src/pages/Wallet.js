import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wallet extends Component {
  render() {
    const {userEmail} = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">
            {userEmail.email}
          </h3>
          <span data-testid="total-field">
            0
          </span>
          <legend data-testid="header-currency-field">
            BRL
          </legend>
        </header>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
});

export default connect(mapStateToProps, null)(Wallet);
