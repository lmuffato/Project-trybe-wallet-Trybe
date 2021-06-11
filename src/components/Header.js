import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/components/header.css';
import TrybeLogo from '../assets/trybe-logo.png';

function Header({ email }) {
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
          <span
            data-testid="total-field"
            className="total"
          >
            0
            {' '}
          </span>
          <span
            data-testid="header-currency-field"
            className="currency"
          >
            BRL
          </span>
        </div>

      </section>

    </header>
  );
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { user: { email } } = state;

  return {
    email,
  };
};

export default connect(mapStateToProps, null)(Header);
