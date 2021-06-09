import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { email } = this.props;
    this.state = {
      emailLogin: email,
      expenses: 0,
      exchange: 'BRL',
    };
  }

  render() {
    const { emailLogin, expenses, exchange } = this.state;
    // console.log(email);
    return (
      <header className="header">
        <span data-testid="email-field">{ emailLogin }</span>
        <span data-testid="total-field">
          Despesas Totais: R$
          {' '}
          { expenses }
        </span>
        <span data-testid="header-currency-field">{ exchange }</span>
      </header>
    );
  }
}

const mapStateToPros = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToPros)(Header);
