import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { loginEmail, totalValue } = this.props;

    const totalSum = totalValue
      .reduce((curr, acc) => (Number(curr) + Number(acc.value)), 0);

    return (
      <div>
        <span data-testid="email-field">{`Email: ${loginEmail}`}</span>
        <span data-testid="total-field">{`Despesa Total: R$ ${totalSum}`}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
  totalValue: state.wallet.expenses,
});

Header.propTypes = {
  loginEmail: PropTypes.string.isRequired,
  totalValue: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
