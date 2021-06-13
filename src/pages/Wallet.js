import React from 'react';
import { connect } from 'react-redux';
import { bool, number } from 'prop-types';
import WalletForm from '../components/WalletForm';
import WalletHeader from '../components/WalletHeader';
import WalletTable from '../components/WalletTable';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    const { editCell, editing } = this.props;
    return (
      <>
        <WalletHeader />
        { editing ? <EditForm id={ editCell } /> : <WalletForm /> }
        <WalletTable />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  editCell: state.edit.editCell,
  editing: state.edit.editing,
});

Wallet.propTypes = {
  editCell: number,
  editing: bool,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
