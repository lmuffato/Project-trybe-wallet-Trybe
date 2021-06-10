import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import EditExpenseForm from '../components/EditExpenseForm';

class Wallet extends React.Component {
  render() {
    const { editForm } = this.props;
    return (
      <div>
        <Header />
        {editForm ? <EditExpenseForm /> : <ExpensesForm />}
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editForm: state.wallet.isEditing,
});

Wallet.propTypes = {
  editForm: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
