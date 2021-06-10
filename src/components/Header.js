import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.getTotalValue = this.getTotalValue.bind(this);

    this.state = {
      totalValue: 0,
    };
  }

  getTotalValue() {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, expense) => acc + expense.value);
    this.setState({
      totalValue,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { totalValue } = this.state;

    return (
      <div>
        <p data-testid="email-field">{`E-mail: ${userEmail}`}</p>
        <p data-testid="total-field">{ totalValue }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
