import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ email, total = 0 }) => (
  <header className="header">
    <div>Trybe-Wallet</div>
    <div>
      <div data-testid="email-field">
        {email}
      </div>
      <div>
        Despesa Total: R$
        <span data-testid="total-field">{total}</span>
      </div>
      <div data-testid="header-currency-field">
        BRL
      </div>
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
