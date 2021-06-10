import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../componentes/Header';
import FormDespesas from '../componentes/FormDespesas';
import { fetchCurrenciesThunk } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestCurrencies } = this.props;
    requestCurrencies();
  }

  render() {
    const { receiveLoginEmail, arrayExpenses, arrayCurrencys } = this.props;
    return (
      <div>
        <Header
          arrayExpenses={ arrayExpenses }
          arrayCurrencys={ arrayCurrencys }
          receiveLoginEmail={ receiveLoginEmail }
        />
        <FormDespesas />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  receiveLoginEmail: state.user.email,
  arrayExpenses: state.wallet.expenses,
  arrayCurrencys: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrencies: () => dispatch(fetchCurrenciesThunk()),
});

Wallet.propTypes = {
  receiveLoginEmail: PropTypes.func.isRequired,
  arrayExpenses: PropTypes.func.isRequired,
  arrayCurrencys: PropTypes.func.isRequired,
  requestCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
