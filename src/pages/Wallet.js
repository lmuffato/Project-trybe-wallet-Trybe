import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './components/ ExpenseForm';
import EditForm from './components/EditForm';
import ExpenseTable from './components/ExpenseTable';
import Header from './components/Header';

class Wallet extends React.Component {
  render() {
    const { edit } = this.props;
    return (
      <div>
        <Header />
        { edit ? <EditForm /> : <ExpenseForm /> }
        <ExpenseTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  edit: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  edit: state.wallet.edit,
});
export default connect(mapStateToProps)(Wallet);
