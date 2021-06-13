import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/components/header.css';
import TrybeLogo from '../assets/trybe-logo.png';

function Header({ email, expences }) {
  function renderTotalValue() {
    const values = expences.map((item) => {
      const value = Number(item.value);
      const currencyValue = Number(item.exchangeRates[item.currency].ask);

      return value * currencyValue || 0;
    });

    const total = values.reduce((acc, current) => (Number(acc + current)), 0);

    return (
      <span data-testid="total-field">{total}</span>
    );
  }

  return (
    <header>
      <img src={ TrybeLogo } alt="Logo da Trybe" />
      <section>
        <span
          data-testid="email-field"
          className="email"
        >
          {email}
        </span>
        <div>
          {renderTotalValue()}
          <span
            data-testid="header-currency-field"
            className="currency"
          >
            {' '}
            BRL

          </span>
        </div>

      </section>

    </header>
  );
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expences: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { user: { email } } = state;

  return {
    email,
  };
};

export default connect(mapStateToProps, null)(Header);
