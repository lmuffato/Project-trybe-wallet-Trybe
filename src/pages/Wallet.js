import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Header from '../components/Header';

import { getCurrencyThunk, addExpenceThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;

    getCurrencies();
  }

  render() {
    const { currencies, addExpences, email, expences } = this.props;

    return (
      <div>
        <Header email={ email } expences={ expences } />
        <Form currencies={ currencies } addExpences={ addExpences } />
      </div>);
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpences: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expences: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Wallet.defaultProps = {
  history: { push: () => {} },
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expences: state.wallet.expenses,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencyThunk()),
  addExpences: (expence) => dispatch(addExpenceThunk(expence)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
