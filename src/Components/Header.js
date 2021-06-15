import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.totalSum = this.totalSum.bind(this);
  }

  totalSum() {
    const { expense } = this.props;
    const reduce = expense.reduce(
      (acc, curr) => acc + (curr.value * curr.exchangeRates[curr.currency].ask), 0,
    );
    return reduce.toFixed(2);
  }

  render() {
    const { emailGotten } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            { emailGotten }
          </p>
          <p data-testid="total-field">{ this.totalSum() }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGotten: state.user.email,
  expense: state.wallet.expenses,
});

Header.propTypes = {
  emailGotten: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
