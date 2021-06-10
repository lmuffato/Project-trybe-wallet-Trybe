import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { takeEmail } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          { takeEmail }
        </header>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <div data-testid="total-field">
          0
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  takeEmail: state.user.email,
});
Wallet.propTypes = {
  takeEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
