import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from './components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    const { user, expensesTotal } = this.props;
    return (
      <>
        <header>
          <span data-testid="email-field">{user.email}</span>
          <span data-testid="total-field">{expensesTotal || 0}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <ExpensesForm />
      </>
    );
  }
}

const mapStateToProps = ({ user, wallet: { expensesTotal } }) => ({
  user,
  expensesTotal,
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  expensesTotal: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
