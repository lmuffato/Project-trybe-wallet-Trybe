import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesFormEdit from '../components/ExpensesFormEdit';
import ExpensesList from '../components/ExpensesList';

class Wallet extends React.Component {
  render() {
    const { edit: { currency } = {} } = this.props;
    return (
      <>
        <Header />
        {currency ? <ExpensesFormEdit /> : <ExpensesForm /> }
        <ExpensesList />
      </>
    );
  }
}

const mapStateToProps = ({ wallet: { edit } }) => ({
  edit,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  edit: PropTypes.shape({
    currency: PropTypes.string,
  }),
}.isRequired;
