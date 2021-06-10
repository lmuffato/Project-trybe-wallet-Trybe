import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span>Trybe</span>
        <p>
          Email:
          <span data-testid="email-field">{email}</span>
        </p>
        <p>
          Despesa Total:
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapDispatchToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapDispatchToProps)(WalletHeader);
