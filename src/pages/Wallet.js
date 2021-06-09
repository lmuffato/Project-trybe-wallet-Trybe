import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../componentes/Header';

class Wallet extends React.Component {
  render() {
    const { receiveLoginEmail, arrayExpenses, arrayCurrencys } = this.props;
    return (
      <div>
        <Header
          arrayExpenses={ arrayExpenses }
          arrayCurrencys={ arrayCurrencys }
          receiveLoginEmail={ receiveLoginEmail }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  receiveLoginEmail: state.user.email,
  arrayExpenses: state.wallet.expenses,
  arrayCurrencys: state.wallet.currencies,
});

Wallet.propTypes = {
  receiveLoginEmail: PropTypes.func.isRequired,
  arrayExpenses: PropTypes.func.isRequired,
  arrayCurrencys: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
