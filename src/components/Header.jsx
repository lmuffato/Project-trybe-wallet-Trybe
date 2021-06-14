import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.css';

class Header extends React.Component {
  render() {
    const { emailStore, totalStore } = this.props;

    return (
      <header id="header-container">
        <h2>Trybe</h2>
        <nav className="nav-container">
          <p data-testid="email-field" id="email">{ `Email: ${emailStore}`}</p>
          <p>Despesa Total: R$</p>
          <p data-testid="total-field">{ totalStore > 0 ? totalStore : 0}</p>
          <p data-testid="header-currency-field">BRL</p>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
  totalStore: state.wallet.total,
});

Header.propTypes = {
  emailStore: PropTypes.string.isRequired,
  totalStore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
