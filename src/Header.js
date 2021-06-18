import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, expenses } = this.props;
    return (
      <>
        <h4 data-testid="email-field">
          E-mail:
          { email }
        </h4>
        <p>
          Despesa Total:
          <span data-testid="total-field">
            { expenses ? expenses
              .reduce((acc, { currency, exchangeRates, value }) => {
                const price = exchangeRates[currency].ask * value;
                return acc + price;
              }, 0) : 0 }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf([]).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
