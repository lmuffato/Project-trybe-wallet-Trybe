import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.css';
// import { sendLogin } from '../actions/index';

class Header extends React.Component {
  render() {
    const { emailStore } = this.props;
    return (
      <header id="header-container">
        <h2>Trybe</h2>
        <nav className="nav-container">
          <p data-testid="email-field" id="email">{ `Email: ${emailStore}`}</p>
          <p data-testid="total-field">Despesa Total: R$ 0,00</p>
          <p data-testid="header-currency-field">BRL</p>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
});

Header.propTypes = {
  emailStore: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
