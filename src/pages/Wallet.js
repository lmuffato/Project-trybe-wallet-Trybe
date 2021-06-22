import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { saveEmail } = this.props;
    return (
      <div>
        <header>
          <h5 data-testid="email-field">
            { saveEmail }
          </h5>
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

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
