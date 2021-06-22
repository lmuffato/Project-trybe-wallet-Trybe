import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailLogado } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ emailLogado.email }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLogado: state.user,
});

Header.propTypes = {
  emailLogado: Proptypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
