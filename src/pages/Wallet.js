import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(_props) {
    super(_props);

    this.state = {
      initialValue: 0,
    };
  }

  render() {
    const { initialValue } = this.state;
    const { userEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Email:
          {userEmail}
        </span>
        <span data-testid="total-field">
          Total:
          {initialValue}
        </span>
        <span data-testid="header-currency-field">Cambio: BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
