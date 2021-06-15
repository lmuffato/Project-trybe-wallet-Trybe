import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import { getCurrenciesListThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrenciesList } = this.props;
    getCurrenciesList();
  }

  render() {
    return (
      <div>
        <WalletHeader />
        <WalletForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesList: () => dispatch(getCurrenciesListThunk()),
});

Wallet.propTypes = {
  getCurrenciesList: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
