import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { theEmail, totalExpended } = this.props;
    return (
      <>
        <h5 data-testid="email-field">
          { theEmail }
        </h5>
        <h5 data-testid="total-field">
          { totalExpended.toFixed(2) }
        </h5>
        <h5 data-testid="header-currency-field"> BRL </h5>
      </>
    );
  }
}

// forma de somar os valores no mapStateToProps vista no repositório de Wanderson
// https://github.com/tryber/sd-010-a-project-trybewallet/pull/20
const mapStateToProps = (state) => ({
  theEmail: state.user.email,
  expenses: state.wallet.expenses,
  totalExpended: state.wallet.expenses.reduce(
    (acc, cur) => parseFloat(cur.value * cur.exchangeRates[cur.currency].ask) + acc, 0,
  ),
});

Header.propTypes = {
  theEmail: PropTypes.string.isRequired,
  totalExpended: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
