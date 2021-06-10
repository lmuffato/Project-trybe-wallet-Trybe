import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, total = 0 } = this.props;
    return (
      <header>
        <span>Olá, </span>
        <span data-testid="email-field">
          { email }
        </span>
        !
        <div>
          <span>Valor total: </span>
          <span data-testid="total-field">{ total }</span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
