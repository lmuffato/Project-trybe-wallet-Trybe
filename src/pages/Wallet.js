import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';
import { fetchCurrencies, getCurrenciesAC } from '../actions';

class Wallet extends React.Component {
  // constructor(_props) {
  //   super(_props);
  // }

  componentDidMount() {
    const { getCurrenciesFromAPI } = this.props;
    getCurrenciesFromAPI();
  }

  render() {
    const { userEmail, totalValue = 0 } = this.props;
    return (
      <section>
        <header>
          <span data-testid="email-field">
            Email:
            {userEmail}
          </span>
          <span data-testid="total-field">
            {totalValue}
          </span>
          <span data-testid="header-currency-field">Cambio: BRL</span>
        </header>
        <WalletForm />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalValue: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesFromAPI: () => dispatch(fetchCurrencies(getCurrenciesAC)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCurrenciesFromAPI: PropTypes.func.isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
