import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { loginEmail, totalValue = 0 } = this.props;

    return (
      <div>
        <span data-testid="email-field">{`Email: ${loginEmail}`}</span>
        <span data-testid="total-field">{`Despesa Total: R$ ${totalValue}`}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
  totalValue: state.wallet.totalValue,
});

Header.propTypes = {
  loginEmail: PropTypes.string.isRequired,
  totalValue: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
