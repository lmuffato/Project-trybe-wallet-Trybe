import React from 'react';
import { connect } from 'react-redux';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import { getCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
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
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
