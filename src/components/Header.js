import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { expenses } = this.props;
    let total = 0;

    if (!expenses) {
      return total;
    }
    expenses.forEach((expense) => {
      const { currency, exchangeRates } = expense;
      total += expense.value * exchangeRates[currency].ask;
    });

    return total;
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ this.totalValue() }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

// Ref. validação props: https://stackoverflow.com/questions/64012257/proptype-name-is-not-required-but-has-no-corresponding-defaultprops-declarati
Header.defaultProps = {
  email: null,
};

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
