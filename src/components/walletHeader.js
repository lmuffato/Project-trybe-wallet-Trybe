import React from 'react';
import PropTypes from 'prop-types';

class WalletHeader extends React.Component {
  render() {
    const { email, total, currence } = this.props;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{email}</h1>
          <h1 data-testid="total-field">{total}</h1>
          <h1 data-testid="header-currency-field">{currence}</h1>
        </header>
      </div>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string,
  total: PropTypes.string,
  currence: PropTypes.string,
}.isRequired;

export default WalletHeader;
